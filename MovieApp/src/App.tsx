import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Movie } from './components/movie'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>Movies</Text>
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
              <Movie rating="9.6" moviename="Black Panther" source='https://resizing.flixster.com/P3XrfzcI9ycfMEdR6iqwPPv0rvU=/206x305/v2/https://resizing.flixster.com/dH6cVqiBByzFjrjLDr9NW9dSdQY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzMxOGI1YzBhLWMyMjEtNGUxMS1iM2Q0LWQ4OGMyYzQyZjQyYS53ZWJw' />
              <Movie rating="9.8" moviename="Parasite" source='https://resizing.flixster.com/enYPx96luLq0FWTdEpiWqX6rxMk=/206x305/v2/https://resizing.flixster.com/OCnoNZ2b2Z_Bpa0RX35IwYN1lLQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzZlZWEwMmY4LTk1OWUtNGEyOS04ODRmLTA0OWRjMzhlYWZkNi53ZWJw'/>
              <Movie rating="9.4" moviename="Avengers: Endgame" source='https://resizing.flixster.com/RFhERqwlJ-IKnP_1qixCfEk_A30=/fit-in/200x296.2962962962963/v1.bTsxMzAxOTkzMjtqOzE4NjkwOzEyMDA7MTY4ODsyNTAw'/>
              <Movie rating="9.7" moviename="Knives Out" source='https://resizing.flixster.com/51Q8Wm5zvrn0VcEv7fRhuf6DXgY=/206x305/v2/https://resizing.flixster.com/mxWCkewT0pWYekfI7x9Y8QKPh14=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzVlNDRiYTk4LTNmYjAtNDdlYi04ZGU0LTZiYjU3ODVjNWRkNi53ZWJw'/>
              <Movie rating="9.3" moviename="Us" source='https://resizing.flixster.com/VHGL7Yfk-O1bz9OLwoCjp9Yl5bo=/206x305/v2/https://resizing.flixster.com/S2tuVOVa1x4-Myimy6g1kItVlmM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MyZWMxMmM0LTdmOTMtNDU3OC05MThiLTk2OTU5YjFkZDhjZi53ZWJw'/>
              <Movie rating="9.7" moviename="Toy Story 4" source='https://resizing.flixster.com/mkKEWnuNTVfLyRdiLCh-ByZU4Lc=/206x305/v2/https://resizing.flixster.com/kBmorcZ1u256R5vlVLes4uQDWTA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc5ZTJhYjFiLTkwNzMtNDdjZS1hY2Q2LTNlN2NjNTZiYWFmNC53ZWJw'/>
              <Movie rating="9.9" moviename="Lady Bird" source='https://resizing.flixster.com/CmD0J-DN-uBKKJeMbhz6po38fso=/206x305/v2/https://resizing.flixster.com/1f9bH_99aSYNgLROtrUDzyuN8ek=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzI4MjU0NjdiLTMwYTQtNDVmNy1hYjdjLWYwNTk5NTc0MGQ3MC53ZWJw'/>
              <Movie rating="10" moviename="Citizen Kane" source='https://resizing.flixster.com/TFBv-8EpN6nFPkEcsGPzQxgndF4=/206x305/v2/https://flxt.tmsimg.com/assets/p1485_p_v10_ac.jpg'/>
              <Movie rating="9.7" moviename="Mission: Impossible - Fallout" source='https://resizing.flixster.com/bRNSA34xdPlV0N-2wTQuQjDW_U8=/206x305/v2/https://resizing.flixster.com/1dOEFq-TDKU4MtMZbjO3gwTyK1M=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzhiMWVjNTExLTEwNjMtNDk2NC1iY2JhLTY1YWIyYTk1Njk1ZC53ZWJw'/>
              <Movie rating="9.8" moviename="The Wizard of Oz" source='https://resizing.flixster.com/ulqUDhVVuKGWDLeBtkp9KjyReo8=/206x305/v2/https://flxt.tmsimg.com/NowShowing/129612/129612_ab.jpg'/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#343434",
    height: "100%"
  },
  body: {
    backgroundColor: "#343434",
    marginHorizontal: 0,
    height: "100%",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
    marginLeft: 20,
  },
});

export default App;
