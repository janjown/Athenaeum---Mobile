import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { ZoomIn, FadeOut } from "react-native-reanimated";

export default function CardView({
  book_title,
  book_author,
  book_img,
  onPress,
}) {
  const handlePress = () => {
    console.log("CardView pressed: ", book_title); // or any other data you want to log
    onPress(); // calling the onPress prop passed from the parent component
  };

  return (
    <TouchableOpacity
      style={styles.cardHitbox}
      onPress={handlePress}
      activeOpacity={1}
    >
      <Animated.View
        entering={ZoomIn.delay(500)}
        exiting={FadeOut.delay(500)}
        style={styles.cardStyle}
      >
        <LinearGradient
          colors={["#DAE2F8", "#D6A4A4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <View style={styles.bookInfoContainer}>
            {/* Book Image */}
            <Image
              style={styles.imageContainer}
              source={require("../assets/img/book_img.png")}
            >
              {book_img}
            </Image>
            <View style={styles.textContainer}>
              {/* Book Name/Title */}
              <Text style={styles.bookTitle}>{book_title}</Text>
              {/* Book Author */}
              <Text style={styles.bookAuthor}>{book_author}</Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    height: hp(20),
    width: wp(95),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#671111",
    margin: hp(1),
    gap: 2,
    flexDirection: "column",
    overflow: "hidden", // To ensure gradient doesn't overflow
  },
  gradient: {
    flex: 1,
    borderRadius: 30,
  },
  cardHitbox: {
    width: wp(100),
  },
  imageContainer: {
    top: hp(5),
    left: wp(5),
  },
  textContainer: {
    width: wp(73.1),
    height: hp(26.5),
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(-13),
    flexDirection: "column",
    marginLeft: wp(20),
  },
  bookInfoContainer: {
    flexDirection: "column",
    marginTop: hp(1),
    /* backgroundColor: "green", */
    width: wp(90),
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
  book_info: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookTitle: {
    width: wp(50),
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "bold",
    alignSelf: "center",
    /* backgroundColor: "green", */
    fontSize: wp(5),
    color: "#671111",
  },
  bookAuthor: {
    width: wp(50),
    marginTop: 3,
    alignSelf: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: wp(5),
    color: "#671111",
  },
});
