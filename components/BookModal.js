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
  runOnJS,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import ButtonNormal from "./ButtonNormal";

const BookModal = ({ visible, book, onClose }) => {
  const modalOpacity = useSharedValue(visible ? 1 : 0);

  React.useEffect(() => {
    modalOpacity.value = withTiming(visible ? 1 : 0, { duration: 100 });
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: modalOpacity.value,
    };
  });

  const handleClose = () => {
    modalOpacity.value = withTiming(0, { duration: 200 }, (isFinished) => {
      if (isFinished) {
        runOnJS(onClose)();
        console.log("User pressed outside/closed the modal.");
      }
    });
  };

  return (
    <Modal transparent={true} visible={visible} onRequestClose={handleClose}>
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={handleClose}
      >
        <Animated.View style={[styles.modalContainer, animatedStyle]}>
          <LinearGradient
            colors={["#fffbd5", "#b20a2c"]}
            style={styles.gradient}
          >
            <View style={styles.modalContent}>
              {book && (
                <>
                  <Text style={styles.modalDescription}>Book Description</Text>
                  <Image
                    style={styles.modalImage}
                    source={require("../assets/img/book.jpg")}
                  />
                  <Text style={styles.modalTitle}>{book.book_title}</Text>
                  <Text style={styles.modalTitle2}>by</Text>
                  <Text style={styles.modalAuthor}>{book.book_author}</Text>
                  <ButtonNormal
                    style={styles.modalButton}
                    text={"Read more..."}
                    onPress={handleClose}
                  />
                </>
              )}
            </View>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    height: hp(97),
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    height: hp(60),
    width: wp(100),
    borderRadius: 30,
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalDescription: {
    fontSize: 20,
    marginTop: hp(3),
    fontFamily: "CreteRound-Regular",
    color: "#000",
    textShadowColor: "white",
    textShadowOffset: { width: wp(0), height: hp(0) },
    textShadowRadius: 5,
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
    color: "#fff",
    fontFamily: "Figtree-VariableFont",
  },
  modalTitle2: {
    fontSize: 17,
    color: "#fff",
    fontFamily: "Figtree-VariableFont",
  },
  modalAuthor: {
    fontSize: 18,
    marginBottom: hp(5),
    color: "#fff",
    fontFamily: "CreteRound-Regular",
  },
  modalButton: {
    marginTop: hp(3),
    fontWeight: "bold",
    color: "#fff",
    color: "black",
    textShadowColor: "white",
    textShadowOffset: { width: wp(0), height: hp(0) },
    textShadowRadius: 5,
  },
});

export default BookModal;
