export const insertComponent = (Component, New, Popular) => props => {
	switch (true) {
		case props.views < 100:
			return (
				<New>
					<Component {...props} />
				</New>
			)
		case props.views >= 1000:
			return (
				<Popular>
					<Component {...props} />
				</Popular>
			)
		default:
			return <Component {...props} />
	}
}
