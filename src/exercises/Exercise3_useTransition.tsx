import { useState, useTransition, useEffect } from "react";

// Mock API functions
const fetchUsers = async (
  page: number,
  searchTerm: string = ""
): Promise<{
  users: Array<{
    id: number;
    name: string;
    email: string;
    role: string;
    avatar: string;
    department: string;
  }>;
  totalPages: number;
  hasMore: boolean;
}> => {
  // Simulate network delay
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000)
  );

  // Mock data generation
  const allUsers = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ["Admin", "User", "Moderator", "Guest"][i % 4],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    department: ["Engineering", "Marketing", "Sales", "HR"][i % 4],
  }));

  // Filter users
  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate
  const usersPerPage = 10;
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const users = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return {
    users,
    totalPages,
    hasMore: page < totalPages,
  };
};

export function UserManagement() {
  const [users, setUsers] = useState<
    Array<{
      id: number;
      name: string;
      email: string;
      role: string;
      avatar: string;
      department: string;
    }>
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // TODO: Implement useTransition for non-urgent updates
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    handleLoadUsers(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  // TODO: Handle urgent updates (search input)
  const handleSearchChange = (value: string) => {
    // TODO: Update search term immediately
    // TODO: Reset to page 1 when searching
  };

  // TODO: Handle non-urgent updates (data fetching)
  const loadUsers = async (page: number, search: string) => {
    try {
      setError(null);
      // TODO: Add loading state

      const result = await fetchUsers(page, search);
      setUsers(result.users);
      setTotalPages(result.totalPages);
      // setTota

      // TODO: Update users and pagination
    } catch (err) {
      setError("Failed to load users. Please try again.");
      console.error("Error loading users:", err);
    }
  };

  const handleLoadUsers = (page: number, search: string) => {
    // TODO: Use startTransition for non-urgent updates
    // startTransition(() => {
    //   loadUsers(page, search);
    //   // second action
    //   // third actions
    // });

    startTransition(async () => {
      await loadUsers(page, search); // services/loadUsers -> axios/fetch
      // second action
      // third actions
    });
  };

  // TODO: Load users on mount and when dependencies change

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleRefresh = () => {
    handleLoadUsers(currentPage, searchTerm);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {/* Status Indicators */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Loading Status</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium">Loading State:</span>
            <span
              className={`ml-2 ${
                isPending ? "text-orange-600" : "text-green-600"
              }`}
            >
              {isPending ? "🔄 Loading..." : "✅ Ready"}
            </span>
          </div>
          <div>
            <span className="font-medium">Current Page:</span> {currentPage} /{" "}
            {totalPages}
          </div>
          <div>
            <span className="font-medium">Search Term:</span> "
            {searchTerm || "none"}"
          </div>
          <div>
            <span className="font-medium">Users Loaded:</span> {users.length}
          </div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Search Users</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by name, email, or role..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleRefresh}
              disabled={isPending}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isPending ? "⏳" : "🔄"} Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {isPending && (
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700"></div>
            <div>
              <div className="font-medium text-blue-800">Loading users...</div>
              <div className="text-sm text-blue-600">
                This is a non-urgent update marked with useTransition
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-red-800">{error}</div>
        </div>
      )}

      {/* Users List */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          Users ({users.length}){searchTerm && ` matching "${searchTerm}"`}
        </h3>

        {/* TODO: Display users in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.length === 0 && !isPending ? (
            <div className="col-span-full p-8 text-center text-gray-500">
              {searchTerm
                ? "No users found matching your search."
                : "No users loaded."}
            </div>
          ) : (
            // TODO: Render user cards
            <>
              <div>User cards will be rendered here</div>
              <p>{JSON.stringify(users, null, 2)}</p>
            </>
          )}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isPending}
            className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <span className="px-4 py-2 text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isPending}
            className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
