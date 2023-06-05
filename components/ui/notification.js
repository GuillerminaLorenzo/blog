import ReactDOM from "react-dom";

import NotificationStyle from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = NotificationStyle.success;
  }

  if (status === "error") {
    statusClasses = NotificationStyle.error;
  }

  const cssClasses = `${NotificationStyle.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
