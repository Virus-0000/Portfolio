import { motion } from 'framer-motion'
import {
  Bell,
  Search,
  Heart,
  MessageCircle,
  Share2,
  Home,
  Users,
  Github,
  LayoutGrid,
  ShoppingCart,
  Package,
  BarChart3,
  Leaf,
  Plus,
  ListTodo,
  CheckCircle2,
  Circle,
  Clock,
  Pin,
  Moon,
  Filter as FilterIcon,
  Database,
  FileText,
  Workflow,
  Table2,
  ChevronRight,
  Search as SearchIcon,
} from 'lucide-react'

const chromeDots = (
  <>
    <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
    <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
    <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
  </>
)

function Chrome({ label }) {
  return (
    <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800/60 px-4 py-3">
      {chromeDots}
      <span className="ml-3 rounded-md bg-ink-900/70 px-3 py-1 font-mono text-[0.7rem] text-bone-500">
        {label}
      </span>
    </div>
  )
}

function SidebarTile({ Icon, active }) {
  return (
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
        active ? 'bg-brass-500/20 text-brass-300' : 'bg-ink-800/70 text-bone-500'
      }`}
    >
      <Icon size={15} strokeWidth={2} />
    </span>
  )
}

function Sidebar({ icons = [], activeIndex = 0 }) {
  return (
    <div className="flex flex-col items-center gap-3 border-r border-ink-700 bg-ink-900/40 py-5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brass-500/25 font-display text-[0.65rem] font-semibold text-brass-200">
        DR
      </span>
      <span className="my-0.5 h-px w-6 bg-ink-700" />
      {icons.map((Icon, n) => (
        <SidebarTile key={n} Icon={Icon} active={n === activeIndex} />
      ))}
    </div>
  )
}

function Avatar({ initials, tone = 'brass' }) {
  const toneClass = tone === 'brass' ? 'bg-brass-500/25 text-brass-200' : 'bg-ink-700 text-bone-300'
  return (
    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-semibold ${toneClass}`}>
      {initials}
    </span>
  )
}

function Bars() {
  const bars = [42, 68, 30, 84, 54, 72, 38]
  return (
    <div className="rounded-xl border border-ink-700 bg-ink-900/50 p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[0.65rem] font-medium text-bone-400">
          <BarChart3 size={12} className="text-brass-400" />
          Monthly orders
        </span>
        <span className="text-[0.65rem] font-medium text-brass-300">+18%</span>
      </div>
      <div className="flex h-24 items-end gap-2 sm:h-28">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: `${h}%`, transformOrigin: 'bottom' }}
            className={`w-full rounded-sm ${i === 3 ? 'bg-brass-400' : 'bg-ink-600'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Social feed — CampusConnect: profile stats, developer feed, interactions.
function SocialBody() {
  const posts = [
    { name: 'Priya S.', initials: 'PS', time: '2h', text: 'Just pushed my capstone project live — feedback welcome!', likes: 24, comments: 6 },
    { name: 'Arjun M.', initials: 'AM', time: '5h', text: 'Looking for teammates for the campus hackathon next week.', likes: 12, comments: 9 },
    { name: 'Neha K.', initials: 'NK', time: '1d', text: 'Connected my GitHub — check out my latest repos on my profile.', likes: 31, comments: 4 },
  ]

  return (
    <div className="p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home size={14} className="text-brass-400" />
          <span className="font-display text-[0.8rem] font-semibold text-bone-100">Feed</span>
        </div>
        <div className="flex items-center gap-2 text-bone-500">
          <Search size={14} />
          <Bell size={14} />
        </div>
      </div>

      <div className="mb-5 flex items-center justify-between rounded-xl border border-ink-700 bg-ink-900/50 p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass-500/25 text-xs font-semibold text-brass-200">
            DR
          </span>
          <div>
            <p className="text-xs font-medium text-bone-100">Divyanshu Raj</p>
            <p className="text-[0.65rem] text-bone-500">Full Stack Developer</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 text-center sm:flex">
          <div>
            <p className="text-xs font-semibold text-bone-100">128</p>
            <p className="text-[0.6rem] text-bone-500">Posts</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-bone-100">312</p>
            <p className="text-[0.6rem] text-bone-500">Connections</p>
          </div>
          <div className="flex items-center gap-1">
            <Github size={11} className="text-bone-500" />
            <p className="text-xs font-semibold text-bone-100">47</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.name} className="rounded-xl border border-ink-700 bg-ink-900/40 p-4">
            <div className="mb-2.5 flex items-center gap-2.5">
              <Avatar initials={post.initials} tone={post.name === 'Priya S.' ? 'brass' : 'ink'} />
              <div className="flex-1">
                <p className="text-xs font-medium text-bone-200">{post.name}</p>
              </div>
              <span className="text-[0.6rem] text-bone-500">{post.time}</span>
            </div>
            <p className="text-[0.72rem] leading-relaxed text-bone-400">{post.text}</p>
            <div className="mt-3 flex items-center gap-4 text-[0.65rem] text-bone-500">
              <span className="flex items-center gap-1">
                <Heart size={12} /> {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={12} /> {post.comments}
              </span>
              <span className="flex items-center gap-1">
                <Share2 size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Storefront/admin — Organic Mart: product grid, cart, order chart.
function EcommerceBody() {
  const products = [
    { name: 'Organic Spinach', price: '₹49', tag: 'Bestseller' },
    { name: 'Farm Fresh Tomatoes', price: '₹38', tag: null },
    { name: 'Cold-Pressed Oil', price: '₹210', tag: 'New' },
  ]
  const stats = [
    { label: 'Orders', value: '1.2k', Icon: Package },
    { label: 'Revenue', value: '₹86k', Icon: BarChart3 },
    { label: 'Users', value: '540', Icon: Users },
  ]

  return (
    <div className="p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf size={14} className="text-brass-400" />
          <span className="font-display text-[0.8rem] font-semibold text-bone-100">Organic Mart</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-ink-600 px-2.5 py-1 text-[0.6rem] text-bone-400">
            Vegetables
          </span>
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-ink-600 text-bone-300">
            <ShoppingCart size={13} />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brass-400 text-[0.5rem] font-bold text-ink-950">
              3
            </span>
          </span>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-3 gap-3">
        {products.map((p) => (
          <div key={p.name} className="relative rounded-xl border border-ink-700 bg-ink-900/50 p-3">
            {p.tag && (
              <span className="absolute right-2 top-2 rounded-full bg-brass-500/25 px-1.5 py-0.5 text-[0.5rem] font-medium text-brass-200">
                {p.tag}
              </span>
            )}
            <div className="mb-3 flex aspect-square w-full items-center justify-center rounded-lg bg-ink-700/50">
              <Leaf size={20} className="text-brass-400/70" />
            </div>
            <p className="truncate text-[0.62rem] font-medium text-bone-300">{p.name}</p>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[0.68rem] font-semibold text-bone-100">{p.price}</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brass-500/25 text-brass-200">
                <Plus size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5 grid grid-cols-3 gap-3">
        {stats.map(({ label, value, Icon }) => (
          <div key={label} className="flex items-center gap-2 rounded-xl border border-ink-700 bg-ink-900/50 px-3 py-2.5">
            <Icon size={13} className="text-brass-400" />
            <div>
              <p className="text-[0.68rem] font-semibold text-bone-100">{value}</p>
              <p className="text-[0.55rem] text-bone-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <Bars />
    </div>
  )
}

// Task dashboard — TaskFlow Manager: filters, priority tags, due dates.
function TasksBody() {
  const tabs = ['All', 'Pending', 'Completed']
  const tasks = [
    { title: 'Design landing page hero', priority: 'High', due: 'Today', category: 'Design', done: false, pinned: true },
    { title: 'Fix auth token refresh bug', priority: 'High', due: 'Tomorrow', category: 'Backend', done: false, pinned: false },
    { title: 'Write API documentation', priority: 'Medium', due: 'Fri', category: 'Docs', done: false, pinned: false },
    { title: 'Update user profile UI', priority: 'Low', due: 'Done', category: 'Frontend', done: true, pinned: false },
  ]
  const priorityTone = {
    High: 'bg-brass-500/25 text-brass-200',
    Medium: 'bg-bone-300/20 text-bone-300',
    Low: 'bg-ink-700 text-bone-500',
  }

  return (
    <div className="p-5 sm:p-7">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListTodo size={14} className="text-brass-400" />
          <span className="font-display text-[0.8rem] font-semibold text-bone-100">My Tasks</span>
        </div>
        <div className="flex items-center gap-2 text-bone-500">
          <FilterIcon size={13} />
          <Moon size={13} />
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className={`rounded-full px-3 py-1 text-[0.62rem] font-medium ${
              i === 0 ? 'bg-brass-500/25 text-brass-200' : 'border border-ink-700 text-bone-500'
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-3 rounded-xl border border-ink-700 bg-ink-900/50 px-4 py-3"
          >
            {task.done ? (
              <CheckCircle2 size={15} className="shrink-0 text-brass-400" />
            ) : (
              <Circle size={15} className="shrink-0 text-bone-600" />
            )}
            <div className="min-w-0 flex-1">
              <p className={`truncate text-[0.7rem] font-medium ${task.done ? 'text-bone-500 line-through' : 'text-bone-200'}`}>
                {task.title}
              </p>
              <div className="mt-1 flex items-center gap-2 text-[0.58rem] text-bone-500">
                <span className="flex items-center gap-1">
                  <Clock size={9} /> {task.due}
                </span>
                <span className="rounded-full border border-ink-700 px-1.5 py-0.5">{task.category}</span>
              </div>
            </div>
            {task.pinned && <Pin size={11} className="shrink-0 text-brass-400" />}
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[0.58rem] font-medium ${priorityTone[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Frappe DocType list view — RideFleet: modules, workflow, records table.
function ErpBody() {
  const stages = ['Draft', 'Submitted', 'Approved']
  const rows = [
    { id: 'INV-2025-0142', name: 'Sundar Traders', status: 'Submitted' },
    { id: 'INV-2025-0141', name: 'Greenfield Co.', status: 'Approved' },
    { id: 'INV-2025-0140', name: 'Metro Supplies', status: 'Draft' },
    { id: 'INV-2025-0139', name: 'Anand Retail', status: 'Approved' },
  ]
  const statusTone = {
    Draft: 'bg-ink-700 text-bone-400',
    Submitted: 'bg-bone-300/20 text-bone-300',
    Approved: 'bg-brass-500/25 text-brass-200',
  }

  return (
    <div className="p-5 sm:p-7">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[0.65rem] text-bone-500">
          <span>Sales</span>
          <ChevronRight size={11} />
          <span className="font-medium text-bone-200">Invoice List</span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-brass-500/25 px-3 py-1 text-[0.62rem] font-medium text-brass-200">
          <Plus size={11} /> New
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-900/50 px-3 py-2 text-bone-500">
        <SearchIcon size={12} />
        <span className="text-[0.62rem]">Filter by DocType, customer, status…</span>
      </div>

      <div className="mb-4 flex items-center gap-2">
        {stages.map((stage, i) => (
          <span key={stage} className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-[0.58rem] font-medium ${
                i === 1 ? 'bg-brass-500/25 text-brass-200' : 'border border-ink-700 text-bone-500'
              }`}
            >
              {stage}
            </span>
            {i < stages.length - 1 && <ChevronRight size={10} className="text-ink-600" />}
          </span>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-ink-700">
        <div className="grid grid-cols-[1.5rem_1fr_5rem] gap-3 border-b border-ink-800 bg-ink-900/60 px-4 py-2.5">
          <span className="h-2 w-2 rounded-sm border border-ink-600" />
          <span className="text-[0.58rem] font-medium uppercase tracking-wide text-bone-500">Invoice / Customer</span>
          <span className="text-[0.58rem] font-medium uppercase tracking-wide text-bone-500">Status</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid grid-cols-[1.5rem_1fr_5rem] items-center gap-3 border-b border-ink-800/70 bg-ink-900/30 px-4 py-2.5 last:border-b-0"
          >
            <span className="h-2 w-2 rounded-sm border border-ink-600" />
            <div className="min-w-0">
              <p className="truncate text-[0.65rem] font-medium text-bone-200">{row.name}</p>
              <p className="truncate font-mono text-[0.55rem] text-bone-500">{row.id}</p>
            </div>
            <span className={`w-fit rounded-full px-2 py-0.5 text-[0.55rem] font-medium ${statusTone[row.status]}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const variants = {
  social: { body: SocialBody, icons: [Home, Users, MessageCircle, Bell] },
  ecommerce: { body: EcommerceBody, icons: [LayoutGrid, Package, ShoppingCart, BarChart3] },
  tasks: { body: TasksBody, icons: [ListTodo, CheckCircle2, Clock] },
  erp: { body: ErpBody, icons: [LayoutGrid, Database, FileText, Workflow, Table2] },
}

// A CSS/SVG-built stand-in for a product screenshot — a polished,
// project-specific interface mockup rather than a real screenshot.
// Keeps the projects section free of stock imagery while still
// giving each project a large, credible, on-brand preview area.
export default function BrowserMock({ label = 'app.local', variant = 'social' }) {
  const { body: Body, icons } = variants[variant] ?? variants.social

  return (
    <div className="group/frame relative">
      {/* Soft gold ambient glow behind the frame — blended into the
          background at rest, slightly stronger on hover. */}
      <div className="ambient-glow -inset-6 bg-brass-500/[0.10] opacity-70 group-hover/frame:opacity-100" />

      <div className="relative w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-850 shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover/frame:-translate-y-1 group-hover/frame:border-brass-500/30">
        <Chrome label={label} />
        <div className="grid grid-cols-[3.25rem_1fr] gap-0 sm:grid-cols-[4rem_1fr]">
          <Sidebar icons={icons} activeIndex={0} />
          <Body />
        </div>
      </div>
    </div>
  )
}
