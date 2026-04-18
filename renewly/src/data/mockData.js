export const CATEGORIES = [
  { id: 'mobiles',     label: 'Mobiles',       icon: '📱', color: 'from-blue-400 to-blue-600' },
  { id: 'electronics', label: 'Electronics',   icon: '💻', color: 'from-violet-400 to-violet-600' },
  { id: 'vehicles',    label: 'Vehicles',      icon: '🚗', color: 'from-orange-400 to-orange-600' },
  { id: 'furniture',   label: 'Furniture',     icon: '🛋️', color: 'from-amber-400 to-amber-600' },
  { id: 'fashion',     label: 'Fashion',       icon: '👗', color: 'from-pink-400 to-pink-600' },
  { id: 'sports',      label: 'Sports',        icon: '⚽', color: 'from-green-400 to-green-600' },
  { id: 'books',       label: 'Books',         icon: '📚', color: 'from-teal-400 to-teal-600' },
  { id: 'home',        label: 'Home & Garden', icon: '🏡', color: 'from-lime-400 to-lime-600' },
  { id: 'pets',        label: 'Pets',          icon: '🐾', color: 'from-rose-400 to-rose-600' },
  { id: 'jobs',        label: 'Jobs',          icon: '💼', color: 'from-indigo-400 to-indigo-600' },
  { id: 'property',    label: 'Property',      icon: '🏠', color: 'from-cyan-400 to-cyan-600' },
  { id: 'services',    label: 'Services',      icon: '🔧', color: 'from-slate-400 to-slate-600' },
]

export const LISTINGS = [
  // ── Coimbatore ─────────────────────────────────────────────────
  {
    id: 1, title: 'iPhone 13 Pro – 256GB Sierra Blue',
    price: 52000, originalPrice: 89000,
    category: 'mobiles', condition: 'Like New',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'RS Puram',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600&q=80',
    seller: { name: 'Arjun K', avatar: 'AK', rating: 4.9, deals: 24 },
    postedAt: '2 hours ago', views: 143, featured: true, verified: true,
    description: 'Bought in Jan 2022. Excellent condition, no scratches. Original box and accessories. Battery health 91%.',
  },
  {
    id: 2, title: 'Royal Enfield Classic 350 – 2021',
    price: 145000, originalPrice: 185000,
    category: 'vehicles', condition: 'Good',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'Gandhipuram',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    seller: { name: 'Priya M', avatar: 'PM', rating: 4.7, deals: 8 },
    postedAt: '5 hours ago', views: 312, featured: true, verified: false,
    description: '2021 model, single owner. 18,000 km. All documents clear. Recently serviced.',
  },
  {
    id: 3, title: 'Sony 55" 4K OLED Smart TV',
    price: 38000, originalPrice: 72000,
    category: 'electronics', condition: 'Good',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'Peelamedu',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80',
    seller: { name: 'Senthil R', avatar: 'SR', rating: 5.0, deals: 41 },
    postedAt: '1 day ago', views: 89, featured: false, verified: true,
    description: 'Sony Bravia XR OLED 2022. Moving abroad. Remote, stand, warranty card included.',
  },
  {
    id: 4, title: 'Vintage Teak Dining Table 6-Seater',
    price: 18500, originalPrice: 45000,
    category: 'furniture', condition: 'Good',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'Saibaba Colony',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    seller: { name: 'Meena S', avatar: 'MS', rating: 4.6, deals: 5 },
    postedAt: '2 days ago', views: 67, featured: false, verified: false,
    description: 'Solid teak dining table + 6 chairs. Minor surface scratches, structurally perfect. Antique finish.',
  },
  {
    id: 5, title: 'Trek Mountain Bike 29" – Hydraulic Disc',
    price: 22000, originalPrice: 58000,
    category: 'sports', condition: 'Good',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'Vadavalli',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=600&q=80',
    seller: { name: 'Hari B', avatar: 'HB', rating: 4.5, deals: 3 },
    postedAt: '4 days ago', views: 44, featured: false, verified: false,
    description: 'Trek Marlin 7, 2022. Hydraulic disc brakes, tubeless-ready wheels. Lightly used.',
  },
  {
    id: 6, title: 'L-Shape Office Sofa Set – Dark Brown',
    price: 12000, originalPrice: 32000,
    category: 'furniture', condition: 'Fair',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'Tidel Park',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
    seller: { name: 'Ravi T', avatar: 'RT', rating: 4.3, deals: 7 },
    postedAt: '1 week ago', views: 33, featured: false, verified: false,
    description: 'Office relocation sale. Good with minor wear. 5-seater L-shape. Pickup only.',
  },
  {
    id: 7, title: 'OnePlus 11 5G – 16GB/256GB Titan Black',
    price: 34000, originalPrice: 61000,
    category: 'mobiles', condition: 'Like New',
    cityId: 'coimbatore', location: 'Coimbatore', area: 'Hopes College',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
    seller: { name: 'Karan P', avatar: 'KP', rating: 4.8, deals: 16 },
    postedAt: '6 hours ago', views: 198, featured: true, verified: true,
    description: 'Purchased 4 months ago, pristine condition. Comes with original charger, box, and 2 cases.',
  },

  // ── Chennai ─────────────────────────────────────────────────────
  {
    id: 8, title: 'MacBook Air M2 – 8GB/512GB Space Gray',
    price: 78000, originalPrice: 119000,
    category: 'electronics', condition: 'Like New',
    cityId: 'chennai', location: 'Chennai', area: 'Anna Nagar',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80',
    seller: { name: 'Vikram N', avatar: 'VN', rating: 4.8, deals: 19 },
    postedAt: '3 hours ago', views: 298, featured: true, verified: true,
    description: 'Bought 6 months ago. Battery health 98%. Original charger. No scratches.',
  },
  {
    id: 9, title: 'Honda City 2020 – Petrol CVT',
    price: 850000, originalPrice: 1100000,
    category: 'vehicles', condition: 'Good',
    cityId: 'chennai', location: 'Chennai', area: 'Velachery',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80',
    seller: { name: 'Lakshmi R', avatar: 'LR', rating: 4.9, deals: 2 },
    postedAt: '1 day ago', views: 512, featured: true, verified: true,
    description: 'Single owner. Full service history. 42,000 km. All original accessories.',
  },
  {
    id: 10, title: 'Ikea ALEX Desk + Monitor Arm Bundle',
    price: 8500, originalPrice: 22000,
    category: 'furniture', condition: 'Good',
    cityId: 'chennai', location: 'Chennai', area: 'OMR',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80',
    seller: { name: 'Divya K', avatar: 'DK', rating: 4.5, deals: 4 },
    postedAt: '3 days ago', views: 55, featured: false, verified: false,
    description: 'WFH setup sale. IKEA ALEX desk 160cm + dual-monitor arm + cable management tray.',
  },
  {
    id: 11, title: 'Nikon Z5 II Mirrorless + 24-70mm Lens',
    price: 95000, originalPrice: 160000,
    category: 'electronics', condition: 'Like New',
    cityId: 'chennai', location: 'Chennai', area: 'T. Nagar',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    seller: { name: 'Suresh M', avatar: 'SM', rating: 4.7, deals: 11 },
    postedAt: '8 hours ago', views: 87, featured: false, verified: true,
    description: 'Used for freelance work. Shutter count < 2000. Full kit – battery grip, extra batteries, bag.',
  },

  // ── Bengaluru ───────────────────────────────────────────────────
  {
    id: 12, title: 'Canon EOS R50 Mirrorless Camera',
    price: 44000, originalPrice: 68000,
    category: 'electronics', condition: 'Like New',
    cityId: 'bangalore', location: 'Bengaluru', area: 'Koramangala',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80',
    seller: { name: 'Deepa L', avatar: 'DL', rating: 4.9, deals: 12 },
    postedAt: '6 hours ago', views: 176, featured: true, verified: true,
    description: 'Bought 4 months ago. Shutter count <1000. 18-45mm lens, UV filter, extra battery, bag.',
  },
  {
    id: 13, title: 'Herman Miller Aeron Chair – Size B',
    price: 55000, originalPrice: 120000,
    category: 'furniture', condition: 'Good',
    cityId: 'bangalore', location: 'Bengaluru', area: 'Indiranagar',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80',
    seller: { name: 'Rohit A', avatar: 'RA', rating: 4.6, deals: 9 },
    postedAt: '2 days ago', views: 234, featured: true, verified: true,
    description: 'Startup shut down, office clearing. Authentic Aeron from authorized dealer. Like new.',
  },
  {
    id: 14, title: 'Samsung Galaxy S24 Ultra – 512GB',
    price: 89000, originalPrice: 135000,
    category: 'mobiles', condition: 'Like New',
    cityId: 'bangalore', location: 'Bengaluru', area: 'HSR Layout',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80',
    seller: { name: 'Ananya S', avatar: 'AS', rating: 5.0, deals: 32 },
    postedAt: '1 hour ago', views: 421, featured: true, verified: true,
    description: 'Switched to iPhone. Pristine condition. Original box, 2 cases, screen protector still on.',
  },
  {
    id: 15, title: 'Specialized Crosstrail Sport Hybrid Bike',
    price: 28000, originalPrice: 62000,
    category: 'sports', condition: 'Good',
    cityId: 'bangalore', location: 'Bengaluru', area: 'Whitefield',
    image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80',
    seller: { name: 'Aditya M', avatar: 'AM', rating: 4.4, deals: 6 },
    postedAt: '5 days ago', views: 66, featured: false, verified: false,
    description: 'Moving city. 8-speed hybrid, disc brakes, front suspension. Commuter-ready.',
  },

  // ── Mumbai ──────────────────────────────────────────────────────
  {
    id: 16, title: 'PS5 Disc Edition + 4 Games',
    price: 38000, originalPrice: 55000,
    category: 'electronics', condition: 'Good',
    cityId: 'mumbai', location: 'Mumbai', area: 'Andheri West',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80',
    seller: { name: 'Rahul D', avatar: 'RD', rating: 4.8, deals: 21 },
    postedAt: '4 hours ago', views: 389, featured: true, verified: true,
    description: 'Console + 2 controllers + FIFA, GTA, Spider-Man, Elden Ring. Perfect condition.',
  },
  {
    id: 17, title: 'Vespa SXL 125 – Matte Black 2022',
    price: 78000, originalPrice: 105000,
    category: 'vehicles', condition: 'Good',
    cityId: 'mumbai', location: 'Mumbai', area: 'Bandra',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    seller: { name: 'Simran K', avatar: 'SK', rating: 4.7, deals: 5 },
    postedAt: '1 day ago', views: 145, featured: false, verified: true,
    description: 'Single owner, 12,000 km. Authorized service history. Extra seat cover included.',
  },
  {
    id: 18, title: 'Apple Watch Series 9 – 45mm GPS',
    price: 28000, originalPrice: 49000,
    category: 'mobiles', condition: 'Like New',
    cityId: 'mumbai', location: 'Mumbai', area: 'Powai',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80',
    seller: { name: 'Neha C', avatar: 'NC', rating: 4.9, deals: 14 },
    postedAt: '7 hours ago', views: 276, featured: true, verified: true,
    description: 'Gifted, prefer iPhone. Battery at 100%. Original box and 3 extra bands included.',
  },

  // ── Delhi ───────────────────────────────────────────────────────
  {
    id: 19, title: 'DJI Mini 4 Pro Drone – Fly More Combo',
    price: 62000, originalPrice: 95000,
    category: 'electronics', condition: 'Like New',
    cityId: 'delhi', location: 'Delhi', area: 'Dwarka',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
    seller: { name: 'Pankaj V', avatar: 'PV', rating: 4.8, deals: 18 },
    postedAt: '2 hours ago', views: 302, featured: true, verified: true,
    description: 'Fly More Combo. ~2h total flight. No crashes. Extra batteries, case, ND filter set.',
  },
  {
    id: 20, title: 'Maruti Swift ZXi+ AMT – 2021',
    price: 560000, originalPrice: 750000,
    category: 'vehicles', condition: 'Good',
    cityId: 'delhi', location: 'Delhi', area: 'Lajpat Nagar',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
    seller: { name: 'Mohit G', avatar: 'MG', rating: 4.6, deals: 3 },
    postedAt: '3 days ago', views: 422, featured: true, verified: false,
    description: 'Single owner, 38,000 km. Full service history. Alloy wheels, sunroof.',
  },
  {
    id: 21, title: 'Bose QuietComfort 45 Headphones',
    price: 14000, originalPrice: 29000,
    category: 'electronics', condition: 'Good',
    cityId: 'delhi', location: 'Delhi', area: 'Karol Bagh',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    seller: { name: 'Tarun S', avatar: 'TS', rating: 4.5, deals: 9 },
    postedAt: '2 days ago', views: 91, featured: false, verified: false,
    description: 'Excellent ANC, used regularly for 8 months. Ear cushions replaced. Comes with case and cable.',
  },

  // ── Hyderabad ───────────────────────────────────────────────────
  {
    id: 22, title: 'iPad Pro 12.9" M2 + Apple Pencil',
    price: 72000, originalPrice: 125000,
    category: 'mobiles', condition: 'Like New',
    cityId: 'hyderabad', location: 'Hyderabad', area: 'Madhapur',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80',
    seller: { name: 'Sravya R', avatar: 'SR', rating: 4.9, deals: 23 },
    postedAt: '5 hours ago', views: 189, featured: true, verified: true,
    description: '256GB WiFi + Cellular. Apple Pencil 2nd gen + Magic Keyboard. Barely used.',
  },
  {
    id: 23, title: 'Godrej 310L Double Door Refrigerator',
    price: 18000, originalPrice: 38000,
    category: 'home', condition: 'Good',
    cityId: 'hyderabad', location: 'Hyderabad', area: 'Gachibowli',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&q=80',
    seller: { name: 'Prasad N', avatar: 'PN', rating: 4.4, deals: 7 },
    postedAt: '4 days ago', views: 78, featured: false, verified: false,
    description: 'Relocating. 2 years old, works perfectly. Buyer arranges transport.',
  },
  {
    id: 24, title: 'Asus ROG Zephyrus G14 Gaming Laptop',
    price: 85000, originalPrice: 130000,
    category: 'electronics', condition: 'Good',
    cityId: 'hyderabad', location: 'Hyderabad', area: 'HITEC City',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80',
    seller: { name: 'Kiran T', avatar: 'KT', rating: 4.7, deals: 14 },
    postedAt: '1 day ago', views: 211, featured: true, verified: true,
    description: 'AMD Ryzen 9 + RTX 3060, 16GB RAM, 512GB SSD. Used lightly for game dev. Comes with original bag.',
  },

  // ── Pune ────────────────────────────────────────────────────────
  {
    id: 25, title: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    price: 18500, originalPrice: 32000,
    category: 'electronics', condition: 'Like New',
    cityId: 'pune', location: 'Pune', area: 'Wakad',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    seller: { name: 'Aditi P', avatar: 'AP', rating: 4.8, deals: 10 },
    postedAt: '9 hours ago', views: 132, featured: false, verified: true,
    description: 'Bought 5 months ago. Rarely used, prefer earbuds. All accessories and original box.',
  },
  {
    id: 26, title: 'Yamaha FZS-FI V3 – 2022',
    price: 88000, originalPrice: 115000,
    category: 'vehicles', condition: 'Good',
    cityId: 'pune', location: 'Pune', area: 'Kothrud',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    seller: { name: 'Omkar J', avatar: 'OJ', rating: 4.5, deals: 4 },
    postedAt: '2 days ago', views: 98, featured: false, verified: false,
    description: '22,000 km. Regular service history. Dual-channel ABS. Minor paint scuff on left panel.',
  },
  {
    id: 27, title: 'Peloton Stationary Bike (India Version)',
    price: 42000, originalPrice: 90000,
    category: 'sports', condition: 'Good',
    cityId: 'pune', location: 'Pune', area: 'Baner',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    seller: { name: 'Swati H', avatar: 'SH', rating: 4.6, deals: 2 },
    postedAt: '6 days ago', views: 56, featured: false, verified: false,
    description: 'Moving to smaller apartment. Subscription not included. Works perfectly. Buyer arranges pickup.',
  },

  // ── Kolkata ─────────────────────────────────────────────────────
  {
    id: 28, title: 'Kindle Paperwhite 11th Gen – 8GB',
    price: 5500, originalPrice: 11000,
    category: 'books', condition: 'Like New',
    cityId: 'kolkata', location: 'Kolkata', area: 'Salt Lake',
    image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=600&q=80',
    seller: { name: 'Tanmoy B', avatar: 'TB', rating: 4.7, deals: 8 },
    postedAt: '1 day ago', views: 61, featured: false, verified: false,
    description: 'Switched to physical books. Used <10 times. IPX8 waterproof. Original cover included.',
  },
  {
    id: 29, title: 'Xiaomi Air Purifier 4 Pro',
    price: 9500, originalPrice: 18000,
    category: 'home', condition: 'Good',
    cityId: 'kolkata', location: 'Kolkata', area: 'Behala',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    seller: { name: 'Ritu S', avatar: 'RS', rating: 4.5, deals: 5 },
    postedAt: '3 days ago', views: 42, featured: false, verified: false,
    description: 'Filter replaced 2 months ago. Works great. Covers 480 sq ft. Moving to ventilated flat.',
  },

  // ── Jaipur ──────────────────────────────────────────────────────
  {
    id: 30, title: 'Rajasthani Brass Antique Wardrobe',
    price: 24000, originalPrice: 65000,
    category: 'furniture', condition: 'Good',
    cityId: 'jaipur', location: 'Jaipur', area: 'C-Scheme',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    seller: { name: 'Anjali S', avatar: 'AS', rating: 4.7, deals: 6 },
    postedAt: '5 days ago', views: 38, featured: false, verified: false,
    description: 'Handcrafted brass-fitted wooden wardrobe, 1980s. Perfect antique piece. Buyer arranges transport.',
  },

  // ── Kochi ───────────────────────────────────────────────────────
  {
    id: 31, title: 'Brompton Folding Bike – M6L',
    price: 65000, originalPrice: 115000,
    category: 'sports', condition: 'Good',
    cityId: 'kochi', location: 'Kochi', area: 'Kakkanad',
    image: 'https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?w=600&q=80',
    seller: { name: 'Mathew J', avatar: 'MJ', rating: 4.9, deals: 11 },
    postedAt: '2 days ago', views: 87, featured: true, verified: true,
    description: 'Brompton M6L in excellent condition. 6-speed, kevlar tyres, rear rack & mudguards.',
  },

  // ── Ahmedabad ────────────────────────────────────────────────────
  {
    id: 32, title: 'Canon PIXMA G3010 Ink Tank Printer',
    price: 7000, originalPrice: 14000,
    category: 'electronics', condition: 'Good',
    cityId: 'ahmedabad', location: 'Ahmedabad', area: 'Navrangpura',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80',
    seller: { name: 'Harsh P', avatar: 'HP', rating: 4.4, deals: 3 },
    postedAt: '1 week ago', views: 29, featured: false, verified: false,
    description: 'Works perfectly. Full ink tanks. Office closing down. Comes with original box.',
  },
]

export const CONDITION_COLORS = {
  'Like New': 'bg-green-100 text-green-700',
  'Good':     'bg-blue-100 text-blue-700',
  'Fair':     'bg-amber-100 text-amber-700',
}

export function formatPrice(price) {
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`
  if (price >= 1000)   return `₹${(price / 1000).toFixed(0)}K`
  return `₹${price}`
}

export function formatPriceFull(price) {
  return `₹${price.toLocaleString('en-IN')}`
}

export function getSavings(price, original) {
  return Math.round(((original - price) / original) * 100)
}

/**
 * Returns listings filtered to the given cityId.
 * Falls back to ALL listings if none found for that city.
 */
export function getListingsByCity(cityId) {
  const city = LISTINGS.filter(l => l.cityId === cityId)
  return city.length > 0 ? city : LISTINGS
}
