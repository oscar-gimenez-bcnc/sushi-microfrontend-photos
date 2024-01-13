export interface DownloadFileProps {
  id: number;
  content: string;
  extension: string;
}

export const downloadFile = async ({ id, content, extension }: DownloadFileProps): Promise<void> => {
  const fileType = extension === 'json' ? 'application/json;charset=utf-8;' : 'text/csv;charset=utf-8;';
  const blob = new Blob([content], { type: fileType });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.setAttribute('download', `album_${id}.${extension}`);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
