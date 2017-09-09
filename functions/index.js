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
        //console.log('child', child.key)
        if(child.key.indexOf('custom_theme_') === 0){
          customThemeCount++;
          //console.log('customThemeCount', customThemeCount)
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
