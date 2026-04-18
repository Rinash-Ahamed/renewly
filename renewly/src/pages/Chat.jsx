import React, { useState } from 'react'
import { Search, ChevronRight, Send, ArrowLeft } from 'lucide-react'

const MOCK_CHATS = [
  {
    id: 1, name: 'Arjun K', avatar: 'AK', color: 'bg-blue-500',
    item: 'iPhone 13 Pro – 256GB', lastMsg: 'Is it still available?', time: '2m', unread: 2,
    itemThumb: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=100&q=60',
    messages: [
      { from: 'them', text: 'Hi! Is the iPhone still available?', time: '10:24 AM' },
      { from: 'them', text: 'Can you do ₹48,000?', time: '10:25 AM' },
      { from: 'me', text: 'Yes it is! Best I can do is ₹50,000.', time: '10:28 AM' },
    ]
  },
  {
    id: 2, name: 'Priya M', avatar: 'PM', color: 'bg-rose-500',
    item: 'Royal Enfield Classic 350', lastMsg: 'When can I see it?', time: '1h', unread: 1,
    itemThumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=60',
    messages: [
      { from: 'me', text: 'Hi, interested in the Royal Enfield!', time: '9:00 AM' },
      { from: 'them', text: 'Great! When can I see it?', time: '9:15 AM' },
    ]
  },
  {
    id: 3, name: 'Senthil R', avatar: 'SR', color: 'bg-violet-500',
    item: 'Sony 55" 4K OLED Smart TV', lastMsg: 'Thanks, will let you know', time: '3h', unread: 0,
    itemThumb: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100&q=60',
    messages: [
      { from: 'them', text: 'Is the TV negotiable?', time: '7:00 AM' },
      { from: 'me', text: 'Slight flexibility possible!', time: '7:10 AM' },
      { from: 'them', text: 'Thanks, will let you know', time: '7:15 AM' },
    ]
  },
]

export default function Chat() {
  const [activeChat, setActiveChat] = useState(null)
  const [msg, setMsg] = useState('')
  const chat = MOCK_CHATS.find(c => c.id === activeChat)

  if (chat) {
    return (
      <div className="flex flex-col h-[calc(100dvh-8rem)]">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 bg-white sticky top-[61px] z-20">
          <button onClick={() => setActiveChat(null)} className="p-1.5 rounded-xl hover:bg-slate-100">
            <ArrowLeft size={20} className="text-slate-600" />
          </button>
          <div className={`w-9 h-9 ${chat.color} rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {chat.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-800 text-sm">{chat.name}</p>
            <p className="text-slate-500 text-xs truncate">{chat.item}</p>
          </div>
          <img src={chat.itemThumb} alt="" className="w-10 h-10 rounded-xl object-cover" />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
          {chat.messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm
                ${m.from === 'me'
                  ? 'bg-green-600 text-white rounded-br-sm'
                  : 'bg-white text-slate-800 shadow-sm rounded-bl-sm'}`}>
                <p>{m.text}</p>
                <p className={`text-[10px] mt-0.5 ${m.from === 'me' ? 'text-green-200' : 'text-slate-400'}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-white border-t border-slate-100 flex gap-2">
          <input type="text" placeholder="Type a message..."
            value={msg} onChange={e => setMsg(e.target.value)}
            className="flex-1 input-field !py-2.5 text-sm"
            onKeyDown={e => e.key === 'Enter' && msg.trim() && setMsg('')}
          />
          <button disabled={!msg.trim()}
            className="w-11 h-11 bg-green-600 hover:bg-green-700 disabled:bg-slate-200 rounded-xl flex items-center justify-center transition-colors">
            <Send size={16} className={msg.trim() ? 'text-white' : 'text-slate-400'} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content">
      <div className="px-4 pt-4">
        <h1 className="font-bold text-slate-800 text-xl mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
          Messages
        </h1>
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input className="input-field pl-9 text-sm" placeholder="Search conversations..." />
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {MOCK_CHATS.map(c => (
          <button key={c.id} onClick={() => setActiveChat(c.id)}
            className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 transition-colors text-left">
            <div className="relative flex-shrink-0">
              <div className={`w-12 h-12 ${c.color} rounded-2xl flex items-center justify-center text-white font-bold`}>
                {c.avatar}
              </div>
              {c.unread > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {c.unread}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <p className="font-semibold text-slate-800 text-sm">{c.name}</p>
                <span className="text-slate-400 text-[11px]">{c.time}</span>
              </div>
              <p className="text-slate-500 text-xs truncate">{c.lastMsg}</p>
              <p className="text-slate-400 text-[10px] truncate">{c.item}</p>
            </div>
            <img src={c.itemThumb} alt="" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )
}
