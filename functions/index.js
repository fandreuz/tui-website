/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');

// Max number of lines of the chat history.
const MAX_LOG_COUNT = 50;
// Removes siblings of the node that element that triggered the function if there are more than MAX_LOG_COUNT.
// In this example we'll keep the max number of chat message history to MAX_LOG_COUNT.
exports.truncate = functions.database.ref('/themes/').onWrite(event => {
  const parentRef = event.data.ref;
  let customThemeCount = 0;
  const updates = {};
  return parentRef.once('value').then(snapshot => {

      snapshot.forEach(function(child) {
        if(child.key.indexOf('custom_theme_') === 0){
          customThemeCount++;
          if(customThemeCount > MAX_LOG_COUNT){
            updates[child.key] = null;
          }
        }
      });
      //console.log('updates', updates)
      // Update the parent. This effectively removes the extra children.
      customThemeCount = 0
      return parentRef.update(updates);
  });
});


// Removes siblings of the node that element that triggered the function if there are more than MAX_LOG_COUNT.
// In this example we'll keep the max number of chat message history to MAX_LOG_COUNT.
exports.duplicates = functions.database.ref('/themes/').onWrite(event => {
  const parentRef = event.data.ref;
  let customThemeCount = 0;
  let defaults;
  const updates = {};
  // var defaultRef = functions.database.ref("/themes/Default");
  // Get the data on a post that has been removed
  // console.log(defaultRef)
  return parentRef.once('value').then(snapshot => {
      
      // snapshot.forEach(function(child) {
      //   const snapshotTheme = child.val();
      //   const newTheme = snapshotTheme.files.THEME;
      //   const newSuggestions = snapshotTheme.files.SUGGESTIONS;
      //   const defaultTheme = defaults.files.THEME;
      //   const defaultSuggestions = defaults.files.SUGGESTIONS;

      //   if(newTheme === defaultTheme && newSuggestions === defaultSuggestions){
      //     console.log(newTheme);
      //   }
      // });
      //console.log('updates', updates)
      // Update the parent. This effectively removes the extra children.
      customThemeCount = 0
      return parentRef.update(updates);
  });
});
