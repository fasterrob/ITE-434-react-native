import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: "#f5f5f5",
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffF",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    color: "#00f",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export { styles };
