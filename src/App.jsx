import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterTabs from "./components/FilterTabs";
import SummaryCard from "./components/SummaryCard";
import "./App.css";
const initial=[{id:1,title:"Complete React component practice",category:"Learning",priority:"High",done:false},{id:2,title:"Review Java notes",category:"Study",priority:"Medium",done:true},{id:3,title:"Prepare project presentation",category:"College",priority:"High",done:false},{id:4,title:"Organize weekly schedule",category:"Personal",priority:"Low",done:false}];
export default function App(){const [tasks,setTasks]=useState(initial);const [filter,setFilter]=useState("All");
 const addTask=title=>setTasks(old=>[{id:Date.now(),title,category:"Personal",priority:"Medium",done:false},...old]);
 const toggle=id=>setTasks(old=>old.map(t=>t.id===id?{...t,done:!t.done}:t));
 const shown=tasks.filter(t=>filter==="All"||(filter==="Completed"?t.done:!t.done));
 const done=tasks.filter(t=>t.done).length;
 return <div className="app"><Header/><main className="wrap"><section className="heading"><div><p className="eyebrow">YOUR PERSONAL WORKSPACE</p><h1>Make room for<br/><span>what matters.</span></h1><p>A clear plan turns busy days into productive ones.</p></div><div className="date-card"><span>TODAY</span><strong>25</strong><small>NOV · WED</small></div></section>
 <section className="summary"><SummaryCard value={tasks.length} label="Total tasks" icon="▤"/><SummaryCard value={done} label="Completed" icon="✓"/><SummaryCard value={tasks.length-done} label="In progress" icon="◷"/></section>
 <section className="board"><div className="board-head"><div><p className="eyebrow">TASK BOARD</p><h2>My tasks</h2></div><FilterTabs value={filter} onChange={setFilter}/></div><TaskForm onAdd={addTask}/><TaskList tasks={shown} onToggle={toggle}/></section>
 </main></div>}
