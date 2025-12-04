import React from "react";

const Notifications = () => {
  return (
    <div>
      <section className="border rounded-xl p-6 shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>

        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Upcoming Elections</p>
              <p className="text-sm text-blue-600">
                Get notified about elections you are eligible for
              </p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Voting Reminders</p>
              <p className="text-sm text-blue-600">
                Receive reminders before voting deadlines
              </p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Official Results</p>
              <p className="text-sm text-blue-600">
                Be the first to know when results are released
              </p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
        </div>

        <button className="bg-green-500 text-white px-5 py-2 rounded-lg mt-6">
          Save Preferences
        </button>
      </section>
    </div>
  );
};

export default Notifications;
