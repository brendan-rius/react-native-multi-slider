import React from 'react'
import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	SliderIOS,
	Image
} from 'react-native'
import MultiSlider from './Slider'
import customMarker from './customMarker'

const styles = StyleSheet.create({
	container: {
		flex          : 1,
		flexDirection : 'column',
		justifyContent: 'space-around',
		alignItems    : "center",
	},
	sliders  : {
		margin: 20,
		width : 280
	},
	text     : {
		alignSelf      : "center",
		paddingVertical: 20
	},
	title    : {
		fontSize: 30
	},
	sliderOne: {
		flexDirection : 'row',
		justifyContent: 'space-around'
	}


})

class Slider extends React.PureComponent {
	state = {
		sliderOneChanging: false,
		sliderOneValue   : [5]
	}

	SliderOneValuesChangeStart() {
		this.setState({
			sliderOneChanging: true
		})
	}

	SliderOneValuesChange(values) {
		this.setState({
			sliderOneValue: values[0]
		})
	}

	SliderOneValuesChangeFinish() {
		this.setState({
			sliderOneChanging: false
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Sliders</Text>
				<View style={styles.sliders}>
					<View style={styles.sliderOne}>
						<Text style={styles.text}>One Marker with callback example:</Text>
						<Text
							style={[styles.text, this.state.sliderOneChanging && {color: 'red'}]}>{this.state.sliderOneValue}</Text>
					</View>
					<MultiSlider
						values={this.state.sliderOneValue}
						sliderLength={280}
						onValuesChangeStart={this.SliderOneValuesChangeStart}
						onValuesChange={this.SliderOneValuesChange}
						onValuesChangeFinish={this.SliderOneValuesChangeFinish}
					/>
					<Text style={styles.text}>Two Markers</Text>
					<MultiSlider values={[3, 7]} sliderLength={280}/>
					<Text style={styles.text}>Custom Marker</Text>
					<MultiSlider
						selectedStyle={{
							backgroundColor: 'gold'
						}}
						unselectedStyle={{
							backgroundColor: 'silver'
						}}
						values={[5]}
						containerStyle={{
							height: 40,
						}}
						trackStyle={{
							height         : 10,
							backgroundColor: 'red'
						}}
						touchDimensions={{
							height          : 40,
							width           : 40,
							borderRadius    : 20,
							slipDisplacement: 40
						}}
						customMarker={customMarker}
						sliderLength={280}/>
					<Text style={styles.text}>Native RCT Slider</Text>
					<SliderIOS/>
				</View>
			</View>
		)
	}
}

AppRegistry.registerComponent('Slider', () => Slider)
