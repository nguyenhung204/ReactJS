function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            <div className="text-2xl font-extrabold  text-[#F44B87FF]">     
                Dashboard
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    {/* <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" /> */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-4 py-2 rounded-md bg-gray-100 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                    />
                </div>

                {/* Icons */}
                {/* <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
                <HelpCircle className="w-5 h-5 text-gray-600 cursor-pointer" /> */}

                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
            </div>
        </header>
    )
}
export default Header