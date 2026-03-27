function generateNoticeReference({ publicationDate, noticeCode, sequenceNumber }) {
  if (!publicationDate || !noticeCode || sequenceNumber === undefined) {
    throw new Error('Missing required fields for notice reference');
  }

  const date = new Date(publicationDate);
  const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, '');

  return `N-${formattedDate}-${noticeCode}-${sequenceNumber}`;
}

module.exports = {
  generateNoticeReference
};
