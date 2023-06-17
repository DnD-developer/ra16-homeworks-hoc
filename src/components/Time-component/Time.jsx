import React, { useState } from "react"
import "./Time.css"
import { TimeProperty } from "../../hooks/TimeProperty"

function DateTime(props) {
	const time = TimeProperty(props.date)
	return <p className="date">{time}</p>
}

function Video(props) {
	return (
		<div className="video">
			<iframe src={props.url} frameBorder="0" allowFullScreen></iframe>
			<DateTime date={props.date} />
		</div>
	)
}

function VideoList(props) {
	return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />)
}

export default function Time() {
	const [list, setList] = useState([
		{
			url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2023-06-17 19:35:00"
		},
		{
			url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2023-06-17 18:45:00"
		},
		{
			url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2023-06-17 19:55:00"
		},
		{
			url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2023-06-17 19:55:00"
		},
		{
			url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2023-06-17 18:55:00"
		},
		{
			url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
			date: "2023-06-17 17:55:00"
		}
	])

	return <VideoList list={list} />
}
