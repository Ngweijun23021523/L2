import Icon from "react-native-vector-icons/FontAwesome6"
import {  Text, ScrollView, Image } from 'react-native';



const Movie = ({ title, year, icon_name,poster }) => {
    return (
        <ScrollView>
            <Image source = {poster}
                   style={{width:400, height:400}}
            />
            <Text>
                {title} {year}
            </Text>
            <Icon name={icon_name} size={100} color="#823823" />
        </ScrollView>
    );
};

export default Movie;
