import { Image, StyleSheet, Text, View } from "react-native";
import ava from "../../assets/images/user.png";

export const UserInfo = () => {
  const avatar = "avatar";
  const login = "Natali Romanova";
  const email = "email@example.com";

  return (
    <View style={styles.container}>
      <Image source={ava} style={styles.avatar} />
      <View>
        <Text style={styles.login}>{login}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 32,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "gray",
  },

  login: {
    fontSize: 13,
    fontWeight: "700",
  },

  email: {
    fontSize: 11,
  },
});
