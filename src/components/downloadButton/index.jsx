export default function DownloadButton({downloadLink, diplomeName, size}) {

   return (
    <a className="downloadHandler" href={downloadLink} download>
     <button className="downloadHandler__downloadButton">
       {diplomeName}
     </button>
   </a>
   );
}