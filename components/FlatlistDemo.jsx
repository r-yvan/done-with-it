import { useState } from "react";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  InputText,
} from "react-native";

const FlatlistDemo = () => {
  const requestingPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    console.log(result);
  };

  useEffect(() => {
    requestingPermission();
  }, []);
  
  const [people, setPeople] = useState([
    { name: "Uwabera Virginie", id: 1 },
    { name: "Niyigena Marie Merci", id: 2 },
    { name: "Umuhire Pacifique", id: 3 },
    { name: "Mutuyimana Marie France", id: 4 },
    { name: "Irasubiza Noella", id: 5 },
    { name: "Rubuto Yvan", id: 6 },
    { name: "Umuhire Pacifique", id: 7 },
    { name: "Mutuyimana Marie France", id: 8 },
    { name: "Irasubiza Noella", id: 9 },
    { name: "Rubuto Yvan", id: 10 },
    { name: "Umuhire Pacifique", id: 11 },
    { name: "Mutuyimana Marie France", id: 12 },
    { name: "Irasubiza Noella", id: 13 },
    { name: "Rubuto Yvan", id: 14 },
  ]);

  const deletePeople = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View className="justify-center items-center h-96 pt-16">
      <FlatList
        className=""
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View className="bg-grey-3 mb-5 p-3 rounded-2xl flex flex-row justify-between">
            <Text className="text-white text-xl">
              {item.id} {item.name}
            </Text>
            <TouchableOpacity
              className="bg-red-600 p-1 rounded-lg"
              onPress={() => deletePeople(item.id)}
            >
              <Text className="font-bold text-white">Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FlatlistDemo;
