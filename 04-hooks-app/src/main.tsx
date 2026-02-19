import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HookApp from './HooksApp'
import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import FocusScreen from './04-useRef/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   {/* <TrafficLightWithEffect/> */}
   {/* <TrafficLightWithHook/> */}
   {/* <PokemonPage/> */}
   {/* <FocusScreen/> */}
   <TasksApp/>
  </StrictMode>,
)
