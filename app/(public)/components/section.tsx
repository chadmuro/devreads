export default function Section() {
  return (
    <div className="w-full space-y-4 mx-auto px-4 max-w-screen-2xl pb-12 md:pb-24 lg:pb-32 xl:pb-48">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
          <div className="p-2 bg-opacity-50 rounded-full">
            <InboxIcon className="h-6 w-6 mb-2 opacity-75" />
          </div>
          <h2 className="text-xl font-bold text-center">Book Library</h2>
          <p className="text-zinc-800 dark:text-zinc-100 text-center">
            Our book library allows you to keep track of books you have read,
            are currently reading, and on your wishlist.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
          <div className="p-2 bg-opacity-50 rounded-full">
            <MergeIcon className="h-6 w-6 mb-2 opacity-75" />
          </div>
          <h2 className="text-xl font-bold text-center">
            Book Recommendations
          </h2>
          <p className="text-zinc-800 dark:text-zinc-100 text-center">
            Get book recommendations based on your reading history.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
          <div className="p-2 bg-opacity-50 rounded-full">
            <SettingsIcon className="h-6 w-6 mb-2 opacity-75" />
          </div>
          <h2 className="text-xl font-bold text-center">Connect Readers</h2>
          <p className="text-zinc-800 dark:text-zinc-100 text-center">
            Connect with other readers and tech enthusiasts and follow what your
            peers are currently reading about.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
          <div className="p-2 bg-opacity-50 rounded-full">
            <SearchIcon className="h-6 w-6 mb-2 opacity-75" />
          </div>
          <h2 className="text-xl font-bold text-center">Reading Groups</h2>
          <p className="text-zinc-800 dark:text-zinc-100 text-center">
            Form a reading group and keep each other accountable for hitting
            your reading goals. (Coming soon...)
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
          <div className="p-2 bg-opacity-50 rounded-full">
            <LockIcon className="h-6 w-6 mb-2 opacity-75" />
          </div>
          <h2 className="text-xl font-bold text-center">Book Summaries</h2>
          <p className="text-zinc-800 dark:text-zinc-100 text-center">
            (Premium) Use our AI tool to get summaries of chapters or entire
            books. (Coming soon...)
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
          <div className="p-2 bg-opacity-50 rounded-full">
            <MergeIcon className="h-6 w-6 mb-2 opacity-75" />
          </div>
          <h2 className="text-xl font-bold text-center">Book AI</h2>
          <p className="text-zinc-800 dark:text-zinc-100 text-center">
            (Premium) Chat with our AI to answer any questions you may have
            about the contents of a book. (Coming soon...)
          </p>
        </div>
      </div>
    </div>
  );
}

function InboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MergeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
