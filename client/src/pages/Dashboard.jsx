import React, { useRef, useState, useEffect } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import VerticalStepProgress from '../components/common/VerticalStepProgress'
import { 
    Menu, 
    BarChart3, 
    FileText, 
    Eye, 
    Calendar,
    Plus,
    Edit,
    Image,
    TrendingUp,
    User,
    LogOut,
    Activity,
    Clock
} from 'lucide-react'

const Dashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [user, setUser] = useState(null)
    const [stats, setStats] = useState({
        totalProjects: 0,
        totalBlogs: 0,
        totalViews: 0,
        recentActivity: []
    })
    const menuRef = useRef(null)

    useEffect(() => {
        // โหลดข้อมูล user และสถิติต่างๆ
        loadUserData()
        loadDashboardStats()
    }, [])

    const loadUserData = () => {
        // ดึงข้อมูล user จาก localStorage หรือ API
        const userData = JSON.parse(localStorage.getItem('user') || '{}')
        setUser(userData)
    }

    const loadDashboardStats = () => {
        // ในการใช้งานจริงจะดึงจาก API
        setStats({
            totalProjects: 12,
            totalBlogs: 8,
            totalViews: 1250,
            recentActivity: [
                { id: 1, type: 'project', title: 'Updated Portfolio Website', time: '2 hours ago' },
                { id: 2, type: 'blog', title: 'New React Tutorial Published', time: '1 day ago' },
                { id: 3, type: 'project', title: 'Created E-commerce App', time: '3 days ago' },
            ]
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
    }

    const quickActions = [
        {
            title: 'สร้าง Project ใหม่',
            icon: Plus,
            color: 'bg-blue-500',
            action: () => navigate('/dashboard/post-project')
        },
        {
            title: 'เขียน Blog ใหม่',
            icon: Edit,
            color: 'bg-green-500',
            action: () => navigate('/dashboard/post-blog')
        },
        {
            title: 'จัดการรูปภาพ',
            icon: Image,
            color: 'bg-purple-500',
            action: () => navigate('/dashboard/manage-images')
        },
        {
            title: 'ดูสถิติ',
            icon: TrendingUp,
            color: 'bg-orange-500',
            action: () => navigate('/dashboard/analytics')
        }
    ]

    const StatCard = ({ title, value, icon: Icon, color }) => (
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" style={{ borderLeftColor: color }}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                </div>
                <div className={`p-3 rounded-full`} style={{ backgroundColor: color + '20' }}>
                    <Icon className="w-6 h-6" style={{ color: color }} />
                </div>
            </div>
        </div>
    )

    const QuickActionCard = ({ title, icon: Icon, color, action }) => (
        <button
            onClick={action}
            className={`${color} hover:opacity-90 transition-all duration-200 rounded-xl p-6 text-white text-left shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
        >
            <Icon className="w-8 h-8 mb-3" />
            <h3 className="font-semibold text-lg">{title}</h3>
        </button>
    )

    const ActivityItem = ({ activity }) => (
        <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`p-2 rounded-full ${activity.type === 'project' ? 'bg-blue-100' : 'bg-green-100'}`}>
                {activity.type === 'project' ? 
                    <BarChart3 className={`w-4 h-4 ${activity.type === 'project' ? 'text-blue-600' : 'text-green-600'}`} /> :
                    <FileText className={`w-4 h-4 ${activity.type === 'project' ? 'text-blue-600' : 'text-green-600'}`} />
                }
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                </p>
            </div>
        </div>
    )

    return (
        <div className="relative text-center flex flex-col items-center min-h-screen overflow-x-hidden bg-gray-50">
            {/* ปุ่มเปิดเมนู */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="fixed top-20 left-0 z-50 bg-black text-white p-2 rounded-r-lg hover:bg-gray-800 transition-colors"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* User Profile Header */}
            <div className="fixed top-4 right-4 z-50 flex items-center space-x-3 bg-white rounded-full shadow-lg px-4 py-2">
                <div className="flex items-center space-x-2">
                    <img 
                        src={user?.avatar || '/assets/images/profile.jpg'} 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">{user?.name || 'Admin'}</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Logout"
                >
                    <LogOut className="w-4 h-4" />
                </button>
            </div>

            {/* Step Progress Menu (Slide in/out) */}
            <div
                ref={menuRef}
                className={`fixed left-0 top-40 z-40 border-r-3 border-t-1 border-b-1 transition-transform duration-500 ease-in-out 
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                    bg-[#B9FF66] rounded-r-2xl p-4 backdrop-blur-md shadow-xl`}
            >
                <VerticalStepProgress key={location.pathname} />
            </div>

            {/* Main Content */}
            <div className="mt-20 px-4 w-full max-w-7xl">
                {location.pathname === '/dashboard' && (
                    <div className="space-y-8">
                        {/* Welcome Header */}
                        <div className="text-left">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                📊 Dashboard Overview
                            </h1>
                            <p className="text-gray-600">ยินดีต้อนรับสู่ระบบจัดการ Portfolio และ Blog</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard 
                                title="Total Projects" 
                                value={stats.totalProjects} 
                                icon={BarChart3} 
                                color="#3B82F6" 
                            />
                            <StatCard 
                                title="Blog Posts" 
                                value={stats.totalBlogs} 
                                icon={FileText} 
                                color="#10B981" 
                            />
                            <StatCard 
                                title="Total Views" 
                                value={stats.totalViews.toLocaleString()} 
                                icon={Eye} 
                                color="#F59E0B" 
                            />
                            <StatCard 
                                title="This Month" 
                                value="24" 
                                icon={Calendar} 
                                color="#EF4444" 
                            />
                        </div>

                        {/* Quick Actions */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4 text-left">🚀 Quick Actions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {quickActions.map((action, index) => (
                                    <QuickActionCard key={index} {...action} />
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-bold text-gray-900 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-blue-600" />
                                        Recent Activity
                                    </h2>
                                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View All
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    {stats.recentActivity.map(activity => (
                                        <ActivityItem key={activity.id} activity={activity} />
                                    ))}
                                </div>
                            </div>

                            {/* Performance Chart Placeholder */}
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                                    Performance Overview
                                </h2>
                                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                                        <p className="text-gray-600">Chart แสดงสถิติการเข้าชม</p>
                                        <p className="text-sm text-gray-500">Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
