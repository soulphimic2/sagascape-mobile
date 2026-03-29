import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Platform,
} from 'react-native';
import { HomeScreenProps } from '../types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const features = [
        {
            icon: '📜',
            title: 'Original Texts',
            description: 'Read the Poetic Edda in Old Norse',
        },
        {
            icon: '👆',
            title: 'Tap Any Word',
            description: 'Instant definitions as you read',
        },
        {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Study anywhere, anytime',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Hero Section */}
                <View style={styles.hero}>
                    <Text style={styles.title}>
                        Saga<Text style={styles.titleAccent}>Scape</Text>
                    </Text>
                    <Text style={styles.subtitle}>
                        Explore the Old Norse Sagas
                    </Text>
                    <Text style={styles.description}>
                        Read ancient texts from the Viking Age with interactive word
                        definitions. Tap any word to see its meaning.
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Reader')}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Begin Your Journey →</Text>
                    </TouchableOpacity>
                </View>

                {/* Features Section */}
                <View style={styles.featuresSection}>
                    <Text style={styles.sectionTitle}>Features</Text>
                    <View style={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <View key={index} style={styles.featureCard}>
                                <Text style={styles.featureIcon}>{feature.icon}</Text>
                                <Text style={styles.featureTitle}>{feature.title}</Text>
                                <Text style={styles.featureDescription}>
                                    {feature.description}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Völuspá • The Prophecy of the Seeress
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f1ea',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 40,
    },
    hero: {
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#1a1e2b',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginBottom: 24,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    titleAccent: {
        color: '#b89b5e',
    },
    subtitle: {
        fontSize: 24,
        color: '#e8e6e3',
        marginBottom: 16,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    description: {
        fontSize: 16,
        color: '#cbd5e1',
        textAlign: 'center',
        marginBottom: 32,
        lineHeight: 24,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#b89b5e',
        paddingHorizontal: 32,
        paddingVertical: 14,
        borderRadius: 12,
        minWidth: 200,
        alignItems: 'center',
    },
    buttonText: {
        color: '#1a1e2b',
        fontSize: 18,
        fontWeight: 'bold',
    },
    featuresSection: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1e2b',
        textAlign: 'center',
        marginBottom: 24,
        fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
    },
    featuresGrid: {
        gap: 16,
    },
    featureCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    featureIcon: {
        fontSize: 40,
        marginBottom: 12,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a1e2b',
        marginBottom: 8,
    },
    featureDescription: {
        fontSize: 14,
        color: '#4a5568',
        textAlign: 'center',
    },
    footer: {
        marginTop: 40,
        paddingVertical: 20,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e2e8f0',
    },
    footerText: {
        fontSize: 12,
        color: '#94a3b8',
    },
});

export default HomeScreen;