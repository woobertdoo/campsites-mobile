import { FlatList } from 'react-native-gesture-handler';
import { Avatar, ListItem } from 'react-native-elements';

const DirectoryScreen = ({ campsites }) => {
    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <ListItem>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList
            data={campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;
