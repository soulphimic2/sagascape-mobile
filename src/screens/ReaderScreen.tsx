import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    Dimensions,
    Platform,
    Animated,
} from 'react-native';
import { ReaderScreenProps, Word } from '../types';
import { sampleText } from '../data/sampleText';

const { width, height } = Dimensions.get('window');

const ReaderScreen: React.FC<ReaderScreenProps> = () => {
    const [selectedWord, setSelectedWord] = useState<Word | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const handleWordPress = (word: Word) => {
        setSelectedWord(word);
        setModalVisible(true);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();

        // Auto-hide after 3 seconds
        setTimeout(() => {
            handleCloseModal();
        }, 3000);
    };

    const handleCloseModal = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setModalVisible(false);
            setSelectedWord(null);
        });
    };

    return (
        <View style={styles.container}>
            {/* Header with info */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Völuspá</Text>
                <Text style={styles.headerSubtitle}>Stanza 1 • The Prophecy</Text>
            </View>

            {/* Text Content */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.textIntroduction}>
                        "Hearing I ask from the holy races, from the sons of Heimdallr..."
                    </Text>

                    <View style={styles.divider} />

                    <View style={styles.oldNorseText}>
                        {sampleText.map((word) => (
                            <TouchableOpacity
                                key={word.id}
                                onPress={() => handleWordPress(word)}
                                activeOpacity={0.7}
                                style={styles.wordContainer}
                            >
                                <Text style={styles.wordText}>
                                    {word.text}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={styles.instructionContainer}>
                        <Text style={styles.instructionText}>
                            👆 Tap any word to see its meaning
                        </Text>
                    </View>
                </View>
            </ScrollView>

            {/* Definition Modal */}
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="none"
                onRequestClose={handleCloseModal}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={handleCloseModal}
                >
                    <Animated.View
                        style={[
                            styles.modalContent,
                            {
                                opacity: fadeAnim,
                                transform: [{
                                    scale: fadeAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.8, 1],
                                    }),
                                }],
                            },
                        ]}
                    >
                        {selectedWord && (
                            <>
                                <Text style={styles.modalWord}>{selectedWord.text}</Text>
                                <Text style={styles.modalMeaning}>{selectedWord.meaning}</Text>
                                <TouchableOpacity
                                    style={styles.modalCloseButton}
                                    onPress={handleCloseModal}
                                >
                                    <Text style={styles.modalCloseText}>✕</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Animated.View>
                </TouchableOpacity>
            </Modal>

            {/* Mobile Hint - Only visible on small devices */}
            <View style={styles.mobileHint}>
                <Text style={styles.mobileHintText}>👆 Tap any word</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1ea',
    },
    header: {
        backgroundColor: '#1a1e2b',
        paddingTop: Platform.OS === 'ios' ? 16 : 24,
        paddingBottom: 16,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#b89b5e',
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#e8e6e3',
        textAlign: 'center',
        marginTop: 4,
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: 80,
    },
    textContainer: {
        padding: 20,
    },
    textIntroduction: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#4a5568',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
    },
    divider: {
        height: 1,
        backgroundColor: '#e2e8f0',
        marginVertical: 20,
    },
    oldNorseText: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30,
    },
    wordContainer: {
        paddingHorizontal: 4,
        paddingVertical: 6,
        marginHorizontal: 2,
        marginVertical: 2,
    },
    wordText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#1a1e2b',
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    instructionContainer: {
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 12,
        backgroundColor: '#e2e8f0',
        borderRadius: 30,
    },
    instructionText: {
        fontSize: 14,
        color: '#4a5568',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#1a1e2b',
        borderRadius: 20,
        padding: 24,
        width: width * 0.8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    modalWord: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#b89b5e',
        marginBottom: 12,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    modalMeaning: {
        fontSize: 18,
        color: '#e8e6e3',
        textAlign: 'center',
        lineHeight: 26,
    },
    modalCloseButton: {
        position: 'absolute',
        top: 12,
        right: 12,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#4a5568',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCloseText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mobileHint: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#b89b5e',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    mobileHintText: {
        color: '#1a1e2b',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ReaderScreen;