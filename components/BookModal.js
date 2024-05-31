import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ButtonNormal from "./ButtonNormal";

const BookModal = ({ visible, book, onClose }) => {
  const modalOpacity = useSharedValue(visible ? 1 : 0);

  React.useEffect(() => {
    modalOpacity.value = withTiming(visible ? 1 : 0, { duration: 300 });
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: modalOpacity.value,
    };
  });

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View style={[styles.modalContainer, animatedStyle]}>
          <View style={styles.modalContent}>
            {book && (
              <>
                <Text style={styles.modalDescription}>Book Description</Text>
                <Image
                  style={styles.modalImage}
                  source={require("../assets/img/book.jpg")}
                />
                <Text style={styles.modalTitle}>{book.book_title}</Text>
                <Text style={styles.modalAuthor}>{book.book_author}</Text>
                <ButtonNormal
                  style={styles.modalButton}
                  title="Borrow"
                  onPress={onClose}
                />
              </>
            )}
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    height: hp(80),
    width: wp(90),
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalDescription: {
    fontSize: 20,
    marginTop: hp(3),
    fontFamily: "CreteRound-Regular",
  },
  modalImage: {
    height: hp(25),
    width: wp(80),
    borderRadius: 20,
    marginTop: hp(3),
  },
  modalTitle: {
    fontSize: 24,
    marginTop: hp(3),
    fontFamily: "Figtree-VariableFont",
  },
  modalAuthor: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "CreteRound-Regular",
  },
  modalButton: {
    marginTop: hp(3),
  },
});

export default BookModal;
