import NotificationContainer from "./_components/NotificationContainer";

export const metadata = {
  title: "Notifications",
  description: "User notifications page",
};

export default function NotificationsPage() {
  return (
    <div className="container mt-20">
      <NotificationContainer />
    </div>
  );
}
