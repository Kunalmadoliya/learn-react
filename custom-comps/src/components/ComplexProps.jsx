const UserProfile = ({user, theme, organization}) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      {/* Profile Header */}
      <div className="flex items-center gap-4 border-b border-neutral-100 p-6">
        <img
          src={user.profile.avatar}
          alt={user.profile.username}
          className="h-16 w-16 rounded-full border border-neutral-200 object-cover"
        />

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold text-neutral-900">
            {user.profile.fullName}
          </h2>
          <p className="text-sm text-neutral-500">@{user.profile.username}</p>
          <p className="mt-1 text-sm text-neutral-600">{user.profile.bio}</p>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          {user.account.status}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 divide-x divide-neutral-200 border-b border-neutral-100">
        <div className="p-4 text-center">
          <p className="text-lg font-semibold">
            {user.social.followers.toLocaleString()}
          </p>
          <p className="text-xs text-neutral-500">Followers</p>
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-semibold">
            {user.social.following.toLocaleString()}
          </p>
          <p className="text-xs text-neutral-500">Following</p>
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-semibold">{user.social.posts}</p>
          <p className="text-xs text-neutral-500">Posts</p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
        {/* Account */}
        <div className="rounded-xl border border-neutral-200 p-4">
          <h3 className="mb-4 text-sm font-semibold text-neutral-900">
            Account Details
          </h3>

          <div className="space-y-3 text-sm">
            <p className="flex justify-between gap-3">
              <span className="text-neutral-500">Email</span>
              <span className="break-all text-right">{user.account.email}</span>
            </p>
            <p className="flex justify-between gap-3">
              <span className="text-neutral-500">Role</span>
              <span>{user.account.role}</span>
            </p>
            <p className="flex justify-between gap-3">
              <span className="text-neutral-500">Location</span>
              <span>{user.profile.location.city}</span>
            </p>
            <p className="flex justify-between gap-3">
              <span className="text-neutral-500">Verified</span>
              <span>{user.profile.verified ? "Yes" : "No"}</span>
            </p>
          </div>
        </div>

        {/* Theme */}
        <div className="rounded-xl border border-neutral-200 p-4">
          <h3 className="mb-4 text-sm font-semibold text-neutral-900">
            Theme Settings
          </h3>

          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-lg border border-neutral-200"
              style={{backgroundColor: theme.colors.primary}}
            />
            <div>
              <p className="text-sm font-medium">{theme.mode} mode</p>
              <p className="text-xs text-neutral-500">{theme.colors.primary}</p>
            </div>
          </div>

          <div className="flex gap-2">
            {Object.entries(theme.colors).map(([name, color]) => (
              <div key={name} className="min-w-0 flex-1 text-center">
                <div
                  className="h-7 rounded-md border border-neutral-200"
                  style={{backgroundColor: color}}
                  title={name}
                />
                <p className="mt-1 truncate text-xs text-neutral-500">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Organization */}
        <div className="rounded-xl border border-neutral-200 p-4 sm:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-neutral-900">
            Organization
          </h3>

          <div className="mb-5 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-lg font-semibold">
                {organization.members.length}
              </p>
              <p className="text-xs text-neutral-500">Members</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-lg font-semibold">
                {organization.subscription.plan}
              </p>
              <p className="text-xs text-neutral-500">Plan</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-lg font-semibold">
                {organization.subscription.usedSeats}/
                {organization.subscription.seats}
              </p>
              <p className="text-xs text-neutral-500">Seats used</p>
            </div>
          </div>

          <div className="divide-y divide-neutral-100">
            {organization.members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between gap-3 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-neutral-500">
                    {member.department}
                  </p>
                </div>
                <span className="rounded-md bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ComplexProps = () => {
  let company = [
    {
      user: {
        profile: {
          id: "usr_1024",
          username: "pixel.nomad",
          fullName: "Aarav Sharma",
          avatar: "https://i.pravatar.cc/150?img=12",
          bio: "Building things and collecting moments.",
          verified: true,
          location: {
            city: "New Delhi",
            country: "India",
            coordinates: {
              latitude: 28.6139,
              longitude: 77.209,
            },
          },
        },

        account: {
          email: "aarav@example.com",
          role: "admin",
          status: "active",
          createdAt: "2025-04-12",
          lastLogin: "2026-10-25T10:30:00Z",
          permissions: ["read", "write", "delete", "manage_users"],
        },

        social: {
          followers: 12500,
          following: 840,
          posts: 342,
          engagementRate: 8.7,

          connections: [
            {id: 2, username: "codewithpriya", status: "following"},
            {id: 3, username: "design.daily", status: "followed_by"},
          ],
        },

        preferences: {
          language: "en",
          timezone: "Asia/Kolkata",
          privacy: {
            privateAccount: false,
            showActivity: true,
            allowMessages: "followers",
          },
          notifications: {
            email: true,
            push: true,
            likes: true,
            comments: true,
            newFollowers: false,
          },
        },
      },

      theme: {
        mode: "dark",
        colors: {
          primary: "#E1306C",
          secondary: "#833AB4",
          background: "#121212",
          surface: "#1E1E1E",
          text: "#FFFFFF",
          muted: "#A1A1AA",
          border: "#333333",
        },
        typography: {
          fontFamily: "Inter",
          headingSize: "24px",
          bodySize: "14px",
          fontWeight: 500,
        },
        layout: {
          sidebarWidth: "260px",
          contentMaxWidth: "1200px",
          spacing: "16px",
          borderRadius: "12px",
        },
      },

      organization: {
        members: [
          {
            id: "mem_01",
            name: "Aarav Sharma",
            role: "owner",
            department: "Engineering",
          },
          {
            id: "mem_02",
            name: "Priya Verma",
            role: "designer",
            department: "Product",
          },
        ],
        subscription: {
          plan: "enterprise",
          seats: 25,
          usedSeats: 18,
          billing: {
            amount: 499,
            currency: "USD",
            interval: "monthly",
            nextBillingDate: "2026-11-25",
          },
        },
      },
    },
  ];
  return (
    <>
      {company.map((va, id) => (
        <UserProfile
          key={id}
          user={va.user}
          theme={va.theme}
          organization={va.organization}
        />
      ))}
    </>
  );
};

export default ComplexProps;
