
import ReactAnimatedWeather from 'react-animated-weather';

export default function Icon(props){
    const rainy = {
        icon: 'RAIN',
        color: '#4682B4',
        size: 55,
        animate: true
}

const sunny = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 55,
    animate: true
}

const cloudy= {
    icon: 'CLOUDY',
    color: 'grey',
    size: 55,
    animate: true
}
    
if (props.image === "Rain") {
   return <ReactAnimatedWeather
    icon={rainy.icon}
    color={rainy.color}
    size={rainy.size}
    animate={rainy.animate}
  />
} else if (props.image === "Clear") {
    return <ReactAnimatedWeather
    icon={sunny.icon}
    color={sunny.color}
    size={sunny.size}
    animate={sunny.animate}
  />
} else if (props.image === "Clouds") {
    return <ReactAnimatedWeather
    icon={cloudy.icon}
    color={cloudy.color}
    size={cloudy.size}
    animate={cloudy.animate}
  />
}
}