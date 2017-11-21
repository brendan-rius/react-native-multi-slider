import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'

class BasicMarker extends React.PureComponent {

	static propTypes = {
		pressed           : PropTypes.bool,
		pressedMarkerStyle: View.propTypes.style,
		markerStyle       : View.propTypes.style
	}

	render() {
		return (
			<View
				style={[this.props.markerStyle, this.props.pressed && this.props.pressedMarkerStyle]}
			/>
		)
	}
}

const mockProps = {
	values              : [0],
	onValuesChangeStart : () => {
		console.log('press started')
	},
	onValuesChange      : values => {
		console.log('changing', values)
	},
	onValuesChangeFinish: values => {
		console.log('changed', values)
	},
	step                : 1,
	min                 : 0,
	max                 : 10,
	selectedStyle       : {
		backgroundColor: 'blue'
	},
	unselectedStyle     : {
		backgroundColor: 'grey'
	},
	containerStyle      : {
		height: 30,
	},
	trackStyle          : {
		height      : 7,
		borderRadius: 3.5,
	},
	touchDimensions     : {
		height          : 30,
		width           : 30,
		borderRadius    : 15,
		slipDisplacement: 30,
	},
	markerStyle         : {
		height         : 30,
		width          : 30,
		borderRadius   : 15,
		backgroundColor: '#E8E8E8',
		borderWidth    : 0.5,
		borderColor    : 'grey',
	},
	customMarker        : BasicMarker,
	pressedMarkerStyle  : {
		backgroundColor: '#D3D3D3',
	},
	sliderLength        : 280
}

export default mockProps