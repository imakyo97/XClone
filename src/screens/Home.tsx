import React from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
    Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data: [ItemProps] = [
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
    {
        iconPath: require('../assets/kono.jpeg'),
        name: '河野太郎',
        id: '@konotarogomame',
        date: 'R6/04/21',
        message: 'なぜかスパムと出るけれど、私のブログへのリンクです。読んでね。',
        commentCount: 65,
        retweetCount: 131,
        likeCount: 1013,
        displayTimes: 610000,
    },
];

type ItemProps = {
    iconPath: any,
    name: string,
    id: string,
    date: string,
    message: string,
    commentCount: number,
    retweetCount: number,
    likeCount: number,
    displayTimes: number,
};

const Item = ({props}: {props: ItemProps}) => (
    <View style={styles.item}>
        <Image style={styles.icon} source={props.iconPath} resizeMode={'contain'}/>
        <View style={styles.contents}>
            <View style={styles.row}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.id}>{props.id}</Text>
                <Text style={styles.date}>{props.date}</Text>
                <View style={styles.spaceView}>
                    <Pressable>
                        <Ionicons name="ellipsis-horizontal" size={16} color={'gray'}/>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.message}>{props.message}</Text>
            <View style={styles.row}>
                <Pressable style={styles.pressable}>
                    <Ionicons name="chatbox-outline" size={16}/>
                    <Text style={styles.count}>{props.commentCount}</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                    <Ionicons name="repeat-outline" size={16}/>
                    <Text style={styles.count}>{props.retweetCount}</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                    <Ionicons name="heart-outline" size={16}/>
                    <Text style={styles.count}>{props.likeCount}</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                    <Ionicons name="stats-chart-outline" size={16}/>
                    <Text style={styles.count}>{props.displayTimes}</Text>
                </Pressable>
                <View style={styles.spaceView}>
                    <View style={styles.row}>
                        <Pressable style={styles.pressable}>
                            <Ionicons name="bookmark-outline" size={16}/>
                        </Pressable>
                        <Pressable style={styles.pressable}>
                            <Ionicons name="share-outline" size={16}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    </View>
);

function Home(): React.JSX.Element {
    return (
        <FlatList
            data={data}
            renderItem={({item}) => <Item props={item} />}
            ItemSeparatorComponent={Separator}
        />
    );
}

const Separator = () => (
    <View style={styles.separator}/>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 8,
    },
    title: {
        fontSize: 32,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    row: {
        flexDirection: 'row',
    },
    contents: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 8,
    },
    name: {
        fontWeight: 'bold',
    },
    id: {
        marginLeft: 8,
    },
    date: {
        marginLeft: 8,
    },
    spaceView: {
        flex: 1,
        alignItems: 'flex-end',
    },
    message: {
        marginVertical: 8,
    },
    count: {
        fontSize: 12,
    },
    pressable: {
        flexDirection: 'row',
        gap: 4,
    },
    separator: {
        borderWidth: 0.5,
        borderColor: 'gray',
        borderStyle: 'solid',
    },
});

export default Home;
