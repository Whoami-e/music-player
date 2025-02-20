import { unknownTrackImageUri } from '@/constants/images';
import { utilsStyles } from '@/styles';
import { FlatList, FlatListProps, Text, View } from "react-native";
import FastImage from 'react-native-fast-image';
import TrackPlayer, { Track } from 'react-native-track-player';
import { TrackListItem } from './TrackListItem';

export type TrackListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[]
}

const ItemDivider = () => (
    <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TracksList = ({ tracks, ...flatlistProps }: TrackListProps) => {

    const handleTrackSelected = async (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()
    }
    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ListFooterComponent={ItemDivider}
            ItemSeparatorComponent={ItemDivider}
            ListEmptyComponent={
                <View>
                    <Text style={utilsStyles.emptyContentText}>No songs found</Text>
                    <FastImage
                        source={{ uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
                        style={utilsStyles.emptyContentImage}
                    />
                </View>
            }
            renderItem={({ item: track }) => (
                <TrackListItem track={track} onTrackSelected={handleTrackSelected} />
            )}
            {...flatlistProps}
        />
    )
}