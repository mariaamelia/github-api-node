# github-api-node
# This API return a users list  according to a user name or a user repository list or user detail. 

# For User details /api/users/anna/details 
# You can check out on Ex:  https://github-api-node.herokuapp.com/api/users/mariaamelia/details 


// 20200709171605
// https://github-api-node.herokuapp.com/api/users/mariaamelia/details

{
  "login": "mariaamelia",
  "id": 6054803,
  "node_id": "MDQ6VXNlcjYwNTQ4MDM=",
  "avatar_url": "https://avatars2.githubusercontent.com/u/6054803?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mariaamelia",
  "html_url": "https://github.com/mariaamelia",
  "followers_url": "https://api.github.com/users/mariaamelia/followers",
  "following_url": "https://api.github.com/users/mariaamelia/following{/other_user}",
  "gists_url": "https://api.github.com/users/mariaamelia/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mariaamelia/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mariaamelia/subscriptions",
  "organizations_url": "https://api.github.com/users/mariaamelia/orgs",
  "repos_url": "https://api.github.com/users/mariaamelia/repos",
  "events_url": "https://api.github.com/users/mariaamelia/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mariaamelia/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Amelia",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2013-11-28T01:33:31Z",
  "updated_at": "2020-07-09T19:48:22Z"
}

# List of users, the results are coming with pagination : api/users?since=mariaamelia 
# Checkout on EX: https://github-api-node.herokuapp.com/api/users?since=mariaamelia

"/**/getlink({\"meta\": {\"Content-Type\":\"application/javascript; charset=utf-8\",\"Cache-Control\":\"no-cache\",\"X-GitHub-Media-Type\":\"github.v3\",\"status\":200,\"X-RateLimit-Limit\":\"10\",\"X-RateLimit-Remaining\":\"9\",\"X-RateLimit-Reset\":\"1594325904\"}, \"data\": {\"total_count\":5,\"incomplete_results\":false,\"items\":[{\"login\":\"mariaamelia\",\"id\":6054803,\"node_id\":\"MDQ6VXNlcjYwNTQ4MDM=\",\"avatar_url\":\"https://avatars2.githubusercontent.com/u/6054803?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/mariaamelia\",\"html_url\":\"https://github.com/mariaamelia\",\"followers_url\":\"https://api.github.com/users/mariaamelia/followers\",\"following_url\":\"https://api.github.com/users/mariaamelia/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/mariaamelia/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/mariaamelia/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/mariaamelia/subscriptions\",\"organizations_url\":\"https://api.github.com/users/mariaamelia/orgs\",\"repos_url\":\"https://api.github.com/users/mariaamelia/repos\",\"events_url\":\"https://api.github.com/users/mariaamelia/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/mariaamelia/received_events\",\"type\":\"User\",\"site_admin\":false,\"score\":1.0},{\"login\":\"mariaameliad\",\"id\":61988524,\"node_id\":\"MDQ6VXNlcjYxOTg4NTI0\",\"avatar_url\":\"https://avatars3.githubusercontent.com/u/61988524?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/mariaameliad\",\"html_url\":\"https://github.com/mariaameliad\",\"followers_url\":\"https://api.github.com/users/mariaameliad/followers\",\"following_url\":\"https://api.github.com/users/mariaameliad/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/mariaameliad/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/mariaameliad/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/mariaameliad/subscriptions\",\"organizations_url\":\"https://api.github.com/users/mariaameliad/orgs\",\"repos_url\":\"https://api.github.com/users/mariaameliad/repos\",\"events_url\":\"https://api.github.com/users/mariaameliad/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/mariaameliad/received_events\",\"type\":\"User\",\"site_admin\":false,\"score\":1.0},{\"login\":\"mariaamelia-rocha\",\"id\":56649709,\"node_id\":\"MDQ6VXNlcjU2NjQ5NzA5\",\"avatar_url\":\"https://avatars0.githubusercontent.com/u/56649709?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/mariaamelia-rocha\",\"html_url\":\"https://github.com/mariaamelia-rocha\",\"followers_url\":\"https://api.github.com/users/mariaamelia-rocha/followers\",\"following_url\":\"https://api.github.com/users/mariaamelia-rocha/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/mariaamelia-rocha/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/mariaamelia-rocha/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/mariaamelia-rocha/subscriptions\",\"organizations_url\":\"https://api.github.com/users/mariaamelia-rocha/orgs\",\"repos_url\":\"https://api.github.com/users/mariaamelia-rocha/repos\",\"events_url\":\"https://api.github.com/users/mariaamelia-rocha/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/mariaamelia-rocha/received_events\",\"type\":\"User\",\"site_admin\":false,\"score\":1.0},{\"login\":\"mariaameliamvb\",\"id\":42748513,\"node_id\":\"MDQ6VXNlcjQyNzQ4NTEz\",\"avatar_url\":\"https://avatars0.githubusercontent.com/u/42748513?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/mariaameliamvb\",\"html_url\":\"https://github.com/mariaameliamvb\",\"followers_url\":\"https://api.github.com/users/mariaameliamvb/followers\",\"following_url\":\"https://api.github.com/users/mariaameliamvb/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/mariaameliamvb/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/mariaameliamvb/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/mariaameliamvb/subscriptions\",\"organizations_url\":\"https://api.github.com/users/mariaameliamvb/orgs\",\"repos_url\":\"https://api.github.com/users/mariaameliamvb/repos\",\"events_url\":\"https://api.github.com/users/mariaameliamvb/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/mariaameliamvb/received_events\",\"type\":\"User\",\"site_admin\":false,\"score\":1.0},{\"login\":\"MariaAmeliaA\",\"id\":61922511,\"node_id\":\"MDQ6VXNlcjYxOTIyNTEx\",\"avatar_url\":\"https://avatars3.githubusercontent.com/u/61922511?v=4\",\"gravatar_id\":\"\",\"url\":\"https://api.github.com/users/MariaAmeliaA\",\"html_url\":\"https://github.com/MariaAmeliaA\",\"followers_url\":\"https://api.github.com/users/MariaAmeliaA/followers\",\"following_url\":\"https://api.github.com/users/MariaAmeliaA/following{/other_user}\",\"gists_url\":\"https://api.github.com/users/MariaAmeliaA/gists{/gist_id}\",\"starred_url\":\"https://api.github.com/users/MariaAmeliaA/starred{/owner}{/repo}\",\"subscriptions_url\":\"https://api.github.com/users/MariaAmeliaA/subscriptions\",\"organizations_url\":\"https://api.github.com/users/MariaAmeliaA/orgs\",\"repos_url\":\"https://api.github.com/users/MariaAmeliaA/repos\",\"events_url\":\"https://api.github.com/users/MariaAmeliaA/events{/privacy}\",\"received_events_url\":\"https://api.github.com/users/MariaAmeliaA/received_events\",\"type\":\"User\",\"site_admin\":false,\"score\":1.0}]}})"


# For user repositories : api/users/anna/repos 
# Checkout onEx:  https://github-api-node.herokuapp.com/api/users/anna/repos 
/ 20200709171857
// https://github-api-node.herokuapp.com/api/users/anna/repos

[
  {
    "id": 83577931,
    "node_id": "MDEwOlJlcG9zaXRvcnk4MzU3NzkzMQ==",
    "name": "ftd",
    "full_name": "anna/ftd",
    "private": false,
    "owner": {
      "login": "anna",
      "id": 4328398,
      "node_id": "MDQ6VXNlcjQzMjgzOTg=",
      "avatar_url": "https://avatars1.githubusercontent.com/u/4328398?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/anna",
      "html_url": "https://github.com/anna",
      "followers_url": "https://api.github.com/users/anna/followers",
      "following_url": "https://api.github.com/users/anna/following{/other_user}",
      "gists_url": "https://api.github.com/users/anna/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/anna/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/anna/subscriptions",
      "organizations_url": "https://api.github.com/users/anna/orgs",
      "repos_url": "https://api.github.com/users/anna/repos",
      "events_url": "https://api.github.com/users/anna/events{/privacy}",
      "received_events_url": "https://api.github.com/users/anna/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/anna/ftd",
    "description": ":skull: Scripts for FOIA The Dead, a morbid transparency project",
    "fork": true,
    "url": "https://api.github.com/repos/anna/ftd",
    "forks_url": "https://api.github.com/repos/anna/ftd/forks",
    "keys_url": "https://api.github.com/repos/anna/ftd/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/anna/ftd/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/anna/ftd/teams",
    "hooks_url": "https://api.github.com/repos/anna/ftd/hooks",
    "issue_events_url": "https://api.github.com/repos/anna/ftd/issues/events{/number}",
    "events_url": "https://api.github.com/repos/anna/ftd/events",
    "assignees_url": "https://api.github.com/repos/anna/ftd/assignees{/user}",
    "branches_url": "https://api.github.com/repos/anna/ftd/branches{/branch}",
    "tags_url": "https://api.github.com/repos/anna/ftd/tags",
    "blobs_url": "https://api.github.com/repos/anna/ftd/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/anna/ftd/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/anna/ftd/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/anna/ftd/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/anna/ftd/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/anna/ftd/languages",
    "stargazers_url": "https://api.github.com/repos/anna/ftd/stargazers",
    "contributors_url": "https://api.github.com/repos/anna/ftd/contributors",
    "subscribers_url": "https://api.github.com/repos/anna/ftd/subscribers",
    "subscription_url": "https://api.github.com/repos/anna/ftd/subscription",
    "commits_url": "https://api.github.com/repos/anna/ftd/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/anna/ftd/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/anna/ftd/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/anna/ftd/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/anna/ftd/contents/{+path}",
    "compare_url": "https://api.github.com/repos/anna/ftd/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/anna/ftd/merges",
    "archive_url": "https://api.github.com/repos/anna/ftd/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/anna/ftd/downloads",
    "issues_url": "https://api.github.com/repos/anna/ftd/issues{/number}",
    "pulls_url": "https://api.github.com/repos/anna/ftd/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/anna/ftd/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/anna/ftd/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/anna/ftd/labels{/name}",
    "releases_url": "https://api.github.com/repos/anna/ftd/releases{/id}",
    "deployments_url": "https://api.github.com/repos/anna/ftd/deployments",
    "created_at": "2017-03-01T16:45:31Z",
    "updated_at": "2018-03-12T05:30:48Z",
    "pushed_at": "2017-03-01T16:46:55Z",
    "git_url": "git://github.com/anna/ftd.git",
    "ssh_url": "git@github.com:anna/ftd.git",
    "clone_url": "https://github.com/anna/ftd.git",
    "svn_url": "https://github.com/anna/ftd",
    "homepage": "https://foiathedead.org",
    "size": 106,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "HTML",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  }
]

