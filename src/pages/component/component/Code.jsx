import Swal from "sweetalert2";
import codeCopyLogo from "/copy-regular.svg";

export default function Code({ children }) {
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Copied to clipboard!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "megaRounded sweetAlertStyle",
          },
        });
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  }
  return (
    <div className="code">
      <code>{children}</code>
      <span className="codeCopyLogo" onClick={() => copyToClipboard(children)}>
        <img src={codeCopyLogo} alt="codeCopyLogo" />
      </span>
    </div>
  );
}
