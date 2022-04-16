'use strict';

const aws = require('aws-sdk');
const fetch = require('node-fetch');

exports.handler = async (event) => {

    // Posts a message to a Slack channel
    // slack_url: an environment variable
    // event: CloudWatch->CodePipeline event
    console.log("event:" + JSON.stringify(event));

    const slack_url = process.env.SLACK_URL;
    let attachment = {text: '', color: 'good'};
    attachment.text = event.detail.pipeline + ': ' + event.detail.stage + ': ' + event.detail.state;
    // add open link
    attachment.text += ' (<https://' + event.region;
    attachment.text += '.console.aws.amazon.com/codesuite/codepipeline/pipelines/';
    attachment.text += event.detail.pipeline + '/view/|Open>)';

    // add channel notification on failure
    if (event.detail.state === 'FAILED')
        attachment.text = '<!channel> ' + attachment.text;
    // change color on state
    if (event.detail.state === 'CANCELLED' || event.detail.state === 'FAILED')
        attachment.color = 'danger';
    else if (event.detail.state === 'RESUMED')
        attachment.color = 'warning';

    if (event.detail.stage === 'Source' && event.detail.state === 'STARTED') {

        // get code commit details on source started
        const pipeline = event.detail.pipeline;

        try {
            const codePipeline = await awsGetCodePipeline(pipeline);

            // get 'Source' stage
            const sourceStage = codePipeline.pipeline.stages.find(function (item) {
                return (item.name === 'Source');
            });

            if (sourceStage) {
                // get code commit action
                const codeCommitAction = sourceStage.actions.find(function (item) {
                    return (item.actionTypeId.provider === 'CodeCommit')
                });

                if (codeCommitAction) {
                    const commit = await awsGetCodeCommitLatestCommit(codeCommitAction.configuration.BranchName, codeCommitAction.configuration.RepositoryName);
                    attachment['author_name'] = 'Started by ' + commit.commit.committer.name + ' in repository ' +
                        codeCommitAction.configuration.RepositoryName + ' (branch: ' + codeCommitAction.configuration.BranchName + ')';
                    attachment['footer'] = 'commit message: ' + commit.commit.message;
                }
            }
        }
        catch (e) {
            console.log('error happened', e);
            attachment['author_name'] = 'Could not get author information';
            attachment['footer'] = 'something went wrong accessing CodeCommit';
        }
    }

    // send message
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({attachments: [attachment]})
    };

    const response = await fetch(slack_url, options);

    if (!response.ok)
        console.error('POST to slack url failed', response);
};

async function awsGetCodePipeline(name) {

    const params = {
        name: name
    };

    const codePipeline = new aws.CodePipeline();
    return codePipeline.getPipeline(params).promise();
}

async function awsGetCodeCommitLatestCommit(branch, name) {

    const getBranchParams = {
        branchName: branch,
        repositoryName: name
    };

    const codeCommit = new aws.CodeCommit();
    const branchData = await codeCommit.getBranch(getBranchParams).promise();

    const getCommitParams = {
        commitId: branchData.branch.commitId,
        repositoryName: name
    };

    return codeCommit.getCommit(getCommitParams).promise();
}