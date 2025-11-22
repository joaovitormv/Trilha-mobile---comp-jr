import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type FilterModalProps = {
    visible: boolean;
    onClose: () => void;
    onSelect: (region: string) => void;
}

export default function RegionFilter({ visible, onClose, onSelect }: FilterModalProps) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType='fade'
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.title}>Escolha uma região</Text>
                    {REGIONS.map((region) => (
                        <TouchableOpacity
                            key={region}
                            style={styles.optionButton}
                            onPress={() => {
                                onSelect(region);
                                onClose();
                            }}
                        >
                            <Text style={styles.optionText}>
                                {region}
                            </Text>

                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                        <Text>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', //Transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
    },
    optionButton: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    cancelButton: {
        marginTop: 15,
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    cancelText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
    },
});