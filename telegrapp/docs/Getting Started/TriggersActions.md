---
sidebar_label: 'Triggers & Actions'
sidebar_position: 2
title: 'Explore Triggers & Actions for Telegram Automation with TelegrApp in GoHighLevel'
description: 'Learn about the triggers and actions available for Telegram automation using TelegrApp integration with GoHighLevel. Optimize your CRM workflows with seamless Telegram messaging, reactions, and group management.'
keywords: [TelegrApp, GoHighLevel, Telegram automation, GHL workflows, conversation channel, Telegram triggers, Telegram actions, CRM messaging, conversation provider, Telegram marketplace]
---
import GlobalLink from '../../src/components/GlobalLink';

# Explore Triggers & Actions for Telegram Automation with TelegrApp in GoHighLevel

Unlock the potential of Telegram automation with TelegrApp by utilizing various triggers and actions in the Workflow Automation section of GoHighLevel (GHL). Enhance your CRM messaging and streamline communication using these powerful tools.

---

## Available Triggers

### 1. **New Telegram Message**
This trigger activates whenever a new message is received from Telegram via a chat, channel, or group. The trigger provides the **Contact ID** (from GHL) and the **Message ID** (from Telegram) as outputs, which can be used as inputs for subsequent actions.

:::note Important
Reactions to Telegram messages are not considered new messages and will not activate this trigger.
:::

---

## Available Actions

### 1. **Send New Telegram Message**
Send a new Telegram message to a chat, channel, or group. This action includes the following input fields:
   - **Contact ID**: Identifies the recipient.
   - **Message**: The text content of the message.
   - **Attachments** (optional): Allows the inclusion of images, documents, or other file types.

### 2. **Send Telegram Reaction**
React to a specific Telegram message with emojis, enhancing communication and engagement. The inputs required are:
   - **Message ID**: Provided by the trigger.
   - **Reaction Type**: Choose from options such as ❤️ (Heart), 🔥 (Fire), 👍 (Thumbs Up), and others.

### 3. **Add Contacts to Telegram Groups**
Add contacts to specific Telegram groups or channels. The only required input is:
   - **Group or Channel**: Select from the dropdown the destination group or channel for the contact.

:::note Upcoming Feature
The "Add Contacts to Telegram Groups" action is currently under testing and is not yet available in production. Stay tuned for updates.
:::

---

## Important Notes on Premium Actions

:::caution Premium Actions
All triggers and actions related to Telegram automation are considered **premium actions** by GHL. Each execution incurs an additional cost of **$0.01 per execution**.
:::

---

## Need Help?
If you have questions or need further support, connect with us directly via Telegram: [Chat with us](https://t.me/+34600251794).

Enhance your CRM workflows and streamline communication with TelegrApp’s seamless integration for Telegram automation. Start optimizing your messaging strategy today!
