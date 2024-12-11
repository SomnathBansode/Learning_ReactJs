import React, { useState } from "react";

const UserData = () => {
  const users = [
    {
      name: "Hedy Lamarr",
      imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
      imageSize: 90,
    },
    {
      name: "Alan Turing",
      imageUrl: "https://i.imgur.com/LmPu9bJ.jpg",
      imageSize: 90,
    },
    {
      name: "Grace Hopper",
      imageUrl: "https://i.imgur.com/1J7I2aX.jpg",
      imageSize: 90,
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    const action = isLoggedIn ? "logout" : "login";
    const confirmation = confirm(`Are you sure you want to ${action}?`);
    if (confirmation) {
      setIsLoggedIn(!isLoggedIn);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md z-50 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-extrabold">User Portal</h1>
        <nav className="flex items-center space-x-6">
          <a href="#home" className="hover:underline font-medium">
            Home
          </a>
          <a href="#about" className="hover:underline font-medium">
            About
          </a>
          <a href="#contact" className="hover:underline font-medium">
            Contact
          </a>
          <button
            onClick={handleToggleLogin}
            className={`ml-4 px-5 py-2 font-bold rounded-full transition ${
              isLoggedIn
                ? "bg-white text-blue-600 hover:bg-blue-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 pt-24">
        {isLoggedIn ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {users.map((user, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all max-w-xs text-center"
              >
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h2 className="text-lg font-bold text-gray-700 mb-2">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500">Innovator & Pioneer</p>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-3xl font-bold text-gray-700 text-center">
            Please click <span className="text-blue-600">Login</span> to see
            user profiles.
          </h1>
        )}
      </div>
    </div>
  );
};

export default UserData;
