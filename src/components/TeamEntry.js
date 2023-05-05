// src/components/TeamEntry.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

function TeamEntry() {
  const [teamName, setTeamName] = useState('');
  const [bonusRound, setBonusRound] = useState(1);

  const saveTeamInfo = async () => {
    // Save the team info to the server
    // ...
    // Clear the input fields after saving
    setTeamName('');
    setBonusRound(1);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Team Name"
        value={teamName}
        onChangeText={setTeamName}
      />
      <Picker
        selectedValue={bonusRound}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setBonusRound(itemValue)}
      >
        {[1, 2, 3, 4, 5, 6].map((round) => (
          <Picker.Item key={round} label={`Bonus Round ${round}`} value={round} />
        ))}
      </Picker>
      <Button onPress={saveTeamInfo} title="Save / Add Team" />
    </View>
  );
}

export default TeamEntry;
