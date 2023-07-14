export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${year}년 ${month}월 ${day}일`;
};
const issuesURL = '/repos/{owner}/{repo}/issues?sort=comments&state=open&per_page=10&page={page}';
const issueURL = '/repos/{owner}/{repo}/issues/{issue_number}';

export const getIssuesURL= (page: number, owner:string, repo: string) : string => {
  return issuesURL
      .replace('{owner}', owner)
      .replace('{repo}', repo)
      .replace('{page}', page + '');
}
export const getIssueURL = (issueNumber: number,owner:string, repo: string): string => {
  return issueURL
      .replace('{owner}', owner)
      .replace('{repo}', repo)
      .replace('{issue_number}', issueNumber + '');
};

export const apiLoadingMessage = '☺️ 로딩중... ☺️'
export const apiErrorMessage = '😭 에러가 발생했습니다. 😭'
