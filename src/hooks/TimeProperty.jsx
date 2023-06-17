import { useEffect, useState } from "react"
import calcTime from "../service/calcTime"

export const TimeProperty = date => {
	const [time, setTime] = new useState(calcTime(date))

	useEffect(() => {
		const intervalId = setInterval(() => setTime(calcTime(date)), 60000)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return time
}
