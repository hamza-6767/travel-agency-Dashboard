import React from 'react'
import { calculateTrendPercentage } from '~/lib/utils';
interface StatsCardProps {
  headerTitle: string;
  total: number;
  currentMonthCount: number;
  lastMonthCount: number;
}
const StatsCard = ( {headerTitle,total,currentMonthCount,lastMonthCount} : StatsCardProps) => {
    const {trend , percentage} = calculateTrendPercentage(currentMonthCount, lastMonthCount);
    const isDecrement = trend === "decrement";
  return (
   <article className= "stats-card">
    <h3 className='text-base font-meduim'
    >{headerTitle}</h3>
   </article>
  )
}

export default StatsCard