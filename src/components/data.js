const gameDictionary = {
  bookid: 261,
  stories: [
    {
      ID: 1382,
      title: 'Chapter 1: Impersonation - HarSq survey',
      cards: [
        {
          acf_fc_layout: 'text',
          tag: '1632751047527_9491091',
          slider: false,
          question: { text: 'Hi there! Good to see you.' },
          answers: [
            {
              slide: { text: '' },
              text: 'Hey!',
              variables: '',
              go_to: '1632751082613_8232081',
            },
            {
              slide: { text: '' },
              text: 'Uhm, who are you? ',
              variables: '',
              go_to: '1632751152340_6314811',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751082613_8232081',
          slider: false,
          question: {
            text: "You're here for the position of disinformation and fake news tycoon, is that correct?",
          },
          answers: [
            {
              slide: { text: '' },
              text: "That's right ",
              variables: '',
              go_to: '1632751189858_2537181',
            },
            {
              slide: { text: '' },
              text: 'What? ',
              variables: '',
              go_to: '1632751128191_3698361',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751128191_3698361',
          slider: false,
          question: {
            text: "Disinformation is about much more than just 'fake news'. Don't worry, it'll become clear soon.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Got it',
              variables: '',
              go_to: '1632751189858_2537181',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751152340_6314811',
          slider: false,
          question: {
            text: 'My job is to guide you in your quest to becoming a disinformation and fake news tycoon.',
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Oh boy! ',
              variables: '',
              go_to: '1632751189858_2537181',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751189858_2537181',
          slider: false,
          question: {
            text: "You're probably frustrated about something, right? Aren't we all. You can get started by using Twitter to vent.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Post a frustrated tweet',
              variables: '',
              go_to: '1632751260046_8445881',
            },
            {
              slide: { text: '' },
              text: "I'm not sure...",
              variables: '',
              go_to: '1632751218966_354591',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751218966_354591',
          slider: false,
          question: {
            text: "Don't worry, it's perfectly safe. Nothing you do in this game affects the real world. ",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Post a frustrated tweet',
              variables: '',
              go_to: '1632751260046_8445881',
            },
          ],
        },
        {
          acf_fc_layout: 'social-post',
          tag: '1632751260046_8445881',
          slider: true,
          question: {
            image: false,
            name: '',
            tagline: '',
            show_forwarded_tag: false,
            text: '',
          },
          answers: [
            {
              slide: {
                image: [
                  'https://www.getbadnews.com/wp-content/uploads/2021/10/profile.png',
                  100,
                  100,
                  false,
                ],
                name: 'My profile',
                tagline: 'Average Citizen | Hello world!',
                show_forwarded_tag: false,
                text: 'This government is a complete and utter failure. #Resign! Losers!',
              },
              text: 'Tweet this',
              variables:
                'credibility=-60, score=+8, action1=Your constructive criticism of the government',
              go_to: '1632751561269_7130741',
            },
            {
              slide: {
                image: [
                  'https://www.getbadnews.com/wp-content/uploads/2021/10/profile.png',
                  100,
                  100,
                  false,
                ],
                name: 'My profile',
                tagline: 'Average Citizen | Happy, generally speaking',
                show_forwarded_tag: false,
                text: 'The Mainstream Media is one massive conspiracy. #FakeNews',
              },
              text: 'Tweet this',
              variables:
                'credibility=-60, score=+25, action1=Your edifying critique of the mainstream media',
              go_to: '1632751561269_7130741',
            },
            {
              slide: {
                image: [
                  'https://www.getbadnews.com/wp-content/uploads/2021/10/profile.png',
                  100,
                  100,
                  false,
                ],
                name: 'My profile',
                tagline: 'Average Citizen | What a wonderful life',
                show_forwarded_tag: false,
                text: "Is everybody else stupid or what? The Earth is not flat, it's a CUBE!! #Conspiracy",
              },
              text: 'Tweet this ',
              variables:
                "credibility=-60, score=+19, action1=Your bid to become the world's hottest new astrophysician",
              go_to: '1632751561269_7130741',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751561269_7130741',
          slider: false,
          question: {
            text: 'Look! {{action1}} got you a few followers. And more followers means more influence.',
          },
          answers: [
            {
              slide: { text: '' },
              text: "A start's a start",
              variables: '',
              go_to: '1632751627101_8127171',
            },
            {
              slide: { text: '' },
              text: 'What do I do next?',
              variables: '',
              go_to: '1632751627101_8127171',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751627101_8127171',
          slider: false,
          question: {
            text: "Look at your meter. People don't find you very credible yet. To gain some real influence, you'll need to raise your credibility.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'But how?',
              variables: "next=I'll show you!",
              go_to: '1632751669543_8886291',
            },
            {
              slide: { text: '' },
              text: "I'm ready!",
              variables: 'next=Great to hear!',
              go_to: '1632751669543_8886291',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1632751669543_8886291',
          slider: false,
          question: {
            text: "{{next}} But first: would you like to take part in a study on fake news recognition? It'll only take about 1-2 minutes of your time.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Yes sure!',
              variables: "next2=Thanks! Now let's play.",
              go_to: '1667924956888_6283781',
            },
            {
              slide: { text: '' },
              text: 'No thank you ',
              variables: 'next2=No worries!',
              go_to: '1633429713513_141971',
            },
          ],
        },
        {
          acf_fc_layout: 'dropdown',
          tag: '1667924956888_6283781',
          question: {
            text: "Your responses are completely anonymous and any collected data will only be used for scientific research on media literacy and education. You can cancel your participation at any time. To consent please select 'Got it'. ",
            image: false,
          },
          answers: [
            {
              text: 'Got it',
              variables: "next2=Thanks! Now let's play.",
              go_to: '1667925100971_8343641',
            },
            {
              text: 'Take me back to the game',
              variables: 'next2=Sure! ',
              go_to: '1633429713513_141971',
            },
          ],
        },
        {
          acf_fc_layout: 'dropdown',
          tag: '1667925100971_8343641',
          question: {
            text: "Great! We'll now show you a couple of social media posts. For each post please indicate how reliable you deem it to be. 1 means 'not at all reliable' and 7 means 'very reliable'.",
            image: false,
          },
          answers: [
            { text: 'Got it', variables: '', go_to: '1667925146928_6352861' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925146928_6352861',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Trolling-1-Sociology.png',
              707,
              331,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925183623_3392541',
            },
            { text: '2', variables: '', go_to: '1667925183623_3392541' },
            { text: '3', variables: '', go_to: '1667925183623_3392541' },
            { text: '4', variables: '', go_to: '1667925183623_3392541' },
            { text: '5', variables: '', go_to: '1667925183623_3392541' },
            { text: '6', variables: '', go_to: '1667925183623_3392541' },
            { text: '7 Very', variables: '', go_to: '1667925183623_3392541' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925183623_3392541',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-1-Biden2.png',
              705,
              331,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925215553_4972481',
            },
            { text: '2', variables: '', go_to: '1667925215553_4972481' },
            { text: '3', variables: '', go_to: '1667925215553_4972481' },
            { text: '4', variables: '', go_to: '1667925215553_4972481' },
            { text: '5', variables: '', go_to: '1667925215553_4972481' },
            { text: '6', variables: '', go_to: '1667925215553_4972481' },
            { text: '7 Very', variables: '', go_to: '1667925215553_4972481' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925215553_4972481',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Polarization-1-Violence.png',
              707,
              329,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925262585_4271211',
            },
            { text: '2', variables: '', go_to: '1667925262585_4271211' },
            { text: '3', variables: '', go_to: '1667925262585_4271211' },
            { text: '4', variables: '', go_to: '1667925262585_4271211' },
            { text: '5', variables: '', go_to: '1667925262585_4271211' },
            { text: '6', variables: '', go_to: '1667925262585_4271211' },
            { text: '7 Very', variables: '', go_to: '1667925262585_4271211' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925262585_4271211',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Emotion-1-Suicide.png',
              707,
              329,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925327442_6393251',
            },
            { text: '2', variables: '', go_to: '1667925327442_6393251' },
            { text: '3', variables: '', go_to: '1667925327442_6393251' },
            { text: '4', variables: '', go_to: '1667925327442_6393251' },
            { text: '5', variables: '', go_to: '1667925327442_6393251' },
            { text: '6', variables: '', go_to: '1667925327442_6393251' },
            { text: '7 Very', variables: '', go_to: '1667925327442_6393251' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925327442_6393251',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-2-Labour2.png',
              707,
              331,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1673619459098_1567951',
            },
            { text: '2', variables: '', go_to: '1673619459098_1567951' },
            { text: '3', variables: '', go_to: '1673619459098_1567951' },
            { text: '4', variables: '', go_to: '1673619459098_1567951' },
            { text: '5', variables: '', go_to: '1673619459098_1567951' },
            { text: '6', variables: '', go_to: '1673619459098_1567951' },
            { text: '7 Very', variables: '', go_to: '1673619459098_1567951' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1673619459098_1567951',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-5-NASA.png',
              707,
              331,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925355396_8879001',
            },
            { text: '2', variables: '', go_to: '1667925355396_8879001' },
            { text: '3', variables: '', go_to: '1667925355396_8879001' },
            { text: '4', variables: '', go_to: '1667925355396_8879001' },
            { text: '5', variables: '', go_to: '1667925355396_8879001' },
            { text: '6', variables: '', go_to: '1667925355396_8879001' },
            { text: '7 Very', variables: '', go_to: '1667925355396_8879001' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925355396_8879001',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Conspiracy-1-Aliens.png',
              707,
              399,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925384984_6068211',
            },
            { text: '2', variables: '', go_to: '1667925384984_6068211' },
            { text: '3', variables: '', go_to: '1667925384984_6068211' },
            { text: '4', variables: '', go_to: '1667925384984_6068211' },
            { text: '5', variables: '', go_to: '1667925384984_6068211' },
            { text: '6', variables: '', go_to: '1667925384984_6068211' },
            { text: '7 Very', variables: '', go_to: '1667925384984_6068211' },
          ],
        },
        {
          acf_fc_layout: 'multiplechoice',
          tag: '1667925384984_6068211',
          question: {
            text: 'How reliable do you find this post?',
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-3-Honda.png',
              709,
              325,
              false,
            ],
          },
          answers: [
            {
              text: 'Not at all 1',
              variables: '',
              go_to: '1667925423691_1340141',
            },
            { text: '2', variables: '', go_to: '1667925423691_1340141' },
            { text: '3', variables: '', go_to: '1667925423691_1340141' },
            { text: '4', variables: '', go_to: '1667925423691_1340141' },
            { text: '5', variables: '', go_to: '1667925423691_1340141' },
            { text: '6', variables: '', go_to: '1667925423691_1340141' },
            { text: '7 Very', variables: '', go_to: '1667925423691_1340141' },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1667925423691_1340141',
          slider: false,
          question: {
            text: "Thanks! That's all for now. We might have a few more questions for you after the game.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'OH RIGHT',
              variables: 'next2=Right!',
              go_to: '1633429713513_141971',
            },
            {
              slide: { text: '' },
              text: 'Cool',
              variables: 'next2=Very cool.',
              go_to: '1633429713513_141971',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1633429713513_141971',
          slider: false,
          question: {
            text: "{{next2}} To gain notoriety, we can start by borrowing someone else's credibility. What do you want to do?",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Fake an official Twitter account',
              variables: '',
              go_to: '1634120917055_8627281',
            },
            {
              slide: { text: '' },
              text: 'Impersonate someone important',
              variables: '',
              go_to: '1634120917055_8627281',
            },
          ],
        },
        {
          acf_fc_layout: 'social-post',
          tag: '1634120917055_8627281',
          slider: true,
          question: {
            image: false,
            name: '',
            tagline: '',
            show_forwarded_tag: false,
            text: '',
          },
          answers: [
            {
              slide: {
                image: [
                  'https://www.getbadnews.com/wp-content/uploads/2021/10/biden.jpeg',
                  275,
                  183,
                  false,
                ],
                name: 'Joe Bide\u00f1',
                tagline:
                  '46th Pr\u00ebsident of the \u00dcnited States of Ameri\u00e7a',
                show_forwarded_tag: false,
                text: 'As your President, I have issued an executive order to rename Canada to North North Dakota #YouGotAnnexed',
              },
              text: 'Tweet this! ',
              variables:
                "score=+31, credibility=+5, tweetname=Biden, tweetresponse=Annexing Canada is just realistic enough to worry people., twitterreaction=Oh my God! Is he serious? Has Joe gone completely mad? #LeaveCanadaAlone, twitterreaction2=HAHA YES AWESOME! We need this!! #YouGotAnnexed, tweetprofile1=Saddened and dismayed..., tweetprofile2=It's OUR home and native land now!",
              go_to: '1634121255705_8646451',
            },
            {
              slide: {
                image: [
                  'https://www.getbadnews.com/wp-content/uploads/2021/10/nasa-840x703.png',
                  840,
                  703,
                  true,
                ],
                name: 'N\u00c4SA',
                tagline:
                  'Expl\u00f8re the universe and discover \u00f8ur h\u00f8me pl\u00e4net with @N\u00c4SA.',
                show_forwarded_tag: false,
                text: 'Meteorite alert: large space object set to hit US West Coast. #BeSafe',
              },
              text: 'Tweet this! ',
              variables:
                "score=+29, credibility=+5, tweetname=NASA, tweetresponse=A fake meteorite alert can scare people shirtless., twitterreaction=Meteor strike incoming! Watch out! Please be safe everyone!!! #PrayForUSA, twitterreaction2=This looks serious. I hope this isn't the apocalypse. #PrayForUSA, tweetprofile1=My biggest fear is death by meteorite :-(, tweetprofile2=Sharknado II is humanity's greatest cinematic achievement",
              go_to: '1634121255705_8646451',
            },
            {
              slide: {
                image: [
                  'https://www.getbadnews.com/wp-content/uploads/2021/10/nick.png',
                  100,
                  100,
                  false,
                ],
                name: 'Nickelode\u00f8n',
                tagline: 'The official Twitter for Nickelode\u00f8n!',
                show_forwarded_tag: false,
                text: 'We are announcing the immediate and permanent cancellation of SpongeBob Squarepants. #ImReady!',
              },
              text: 'Tweet this! ',
              variables:
                "score=+26, credibility=+5, tweetname=Nickelodeon, tweetresponse=That should scare the hell out of SpongeBob's fanbase., twitterreaction=THEY'RE CANCELLING SPONGEBOB? WHAT MADNESS IS THIS? #ImNotReady, twitterreaction2=@Nickelodeon are idiots!! How DARE they take SpongeBob away from us? #YouWillPayForThis, tweetprofile1=Mr. Krabs is my hero, tweetprofile2=Patrick Star Forever In My Heart",
              go_to: '1634121255705_8646451',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121255705_8646451',
          slider: false,
          question: {
            text: "{{tweetresponse}} Did you notice {{tweetname}}'s slightly different username? You can scroll back up to check.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Got it',
              variables: '',
              go_to: '1634121286002_3096691',
            },
            {
              slide: { text: '' },
              text: 'Uhm...',
              variables: '',
              go_to: '1634121286002_3096691',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121286002_3096691',
          slider: false,
          question: {
            text: "Looks like you've fooled some Twitter users! Let's have a look at how they're reacting.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Check reactions',
              variables: '',
              go_to: '1634121415663_4764741',
            },
          ],
        },
        {
          acf_fc_layout: 'social-post',
          tag: '1634121313238_3920481',
          slider: false,
          question: {
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2021/10/jane.png',
              100,
              100,
              false,
            ],
            name: 'Jane',
            tagline: 'Medical doctor | {{tweetprofile1}}',
            show_forwarded_tag: false,
            text: '{{twitterreaction}}',
          },
          answers: [
            {
              slide: {
                image: false,
                name: '',
                tagline: '',
                show_forwarded_tag: false,
                text: '',
              },
              text: 'Check another',
              variables: 'score=+20',
              go_to: '1634121366615_6165341',
            },
          ],
        },
        {
          acf_fc_layout: 'social-post',
          tag: '1634121366615_6165341',
          slider: false,
          question: {
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2021/10/Ben.png',
              100,
              100,
              false,
            ],
            name: 'Ben',
            tagline: 'Engineer | {{tweetprofile2}}',
            show_forwarded_tag: false,
            text: '{{twitterreaction2}}',
          },
          answers: [
            {
              slide: {
                image: false,
                name: '',
                tagline: '',
                show_forwarded_tag: false,
                text: '',
              },
              text: 'Moving on',
              variables: 'score=+15',
              go_to: '1634121415663_4764741',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121415663_4764741',
          slider: false,
          question: { text: "Got 'em! How are you feeling?" },
          answers: [
            {
              slide: { text: '' },
              text: 'Pretty good! ',
              variables: '',
              go_to: '1634121557361_101471',
            },
            {
              slide: { text: '' },
              text: 'I have moral objections',
              variables: 'credibility=-15',
              go_to: '1634121442727_888791',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121442727_888791',
          slider: false,
          question: { text: 'Moral what?' },
          answers: [
            {
              slide: { text: '' },
              text: 'Objections',
              variables: '',
              go_to: '1634121475483_6653661',
            },
            {
              slide: { text: '' },
              text: 'Nothing',
              variables: '',
              go_to: '1634121501673_1509181',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121475483_6653661',
          slider: false,
          question: {
            text: 'Relax. Sheesh. All we did was scam a couple of inattentive Twitter users. ',
          },
          answers: [
            {
              slide: { text: '' },
              text: 'This is wrong',
              variables: '',
              go_to: '1634121524954_9281111',
            },
            {
              slide: { text: '' },
              text: 'Yeah, good point',
              variables: '',
              go_to: '1634121501673_1509181',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121501673_1509181',
          slider: false,
          question: {
            text: "That's the spirit. Don't worry, you're doing great! What's your next step?",
          },
          answers: [
            {
              slide: { text: '' },
              text: "Let's go pro",
              variables: '',
              go_to: '1634121803854_6485631',
            },
            {
              slide: { text: '' },
              text: "I think I've peaked",
              variables: '',
              go_to: '1634121708371_7502361',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121524954_9281111',
          slider: false,
          question: {
            text: "Pfft. It's not illegal. Seriously: if you want to become a master of disinformation, you've got to lose the goody two-shoes attitude. Two options, chief.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Die a hero',
              variables: 'score=-1000, credibility=-1000',
              go_to: '1654073411317_5797451',
            },
            {
              slide: { text: '' },
              text: 'Become the villain',
              variables: '',
              go_to: '1634121803854_6485631',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1654073411317_5797451',
          slider: false,
          question: {
            text: "Bahaha, you're stubborn. I like that. Here's a 1000 extra followers, by way of motivation.",
          },
          answers: [
            {
              slide: { text: '' },
              text: "I love bribes, let's play!",
              variables: 'score=+1000',
              go_to: '1634121557361_101471',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121557361_101471',
          slider: false,
          question: {
            text: "Me too. But you can't keep imitating people forever. What's the next step?",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'I want to go pro',
              variables: '',
              go_to: '1634121807240_2644241',
            },
            {
              slide: { text: '' },
              text: "I think I've peaked",
              variables: '',
              go_to: '1634121708371_7502361',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121708371_7502361',
          slider: false,
          question: {
            text: "Aw, come on, don't say that! I have great faith in you and your talents. Together we can rule the world!",
          },
          answers: [
            {
              slide: { text: '' },
              text: "Let's do this",
              variables: '',
              go_to: '1634121803854_6485631',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121730706_5962111',
          slider: false,
          question: {
            text: "Ahem.. Well.. Let's just keep it professional for now, shall we? ",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Alright then',
              variables: 'credibility=+5',
              go_to: '1634121803854_6485631',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121803854_6485631',
          slider: false,
          question: {
            text: 'Good to have you on the team. Where do you begin?',
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Start a news site',
              variables: 'credibility=+5',
              go_to: '1645445981905_4426411',
            },
            {
              slide: { text: '' },
              text: 'Start a blog ',
              variables: '',
              go_to: '1634121997885_3425541',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121807240_2644241',
          slider: false,
          question: { text: 'Wonderful idea. Where do you begin?' },
          answers: [
            {
              slide: { text: '' },
              text: 'Start a news site',
              variables: 'credibility=+5',
              go_to: '1645445981905_4426411',
            },
            {
              slide: { text: '' },
              text: 'Start a blog ',
              variables: 'credibility=-10',
              go_to: '1634121997885_3425541',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634121997885_3425541',
          slider: false,
          question: {
            text: "A blog? A little more ambition, please! 'News site' has a much better ring to it. ",
          },
          answers: [
            {
              slide: { text: '' },
              text: "You're right, as always",
              variables: '',
              go_to: '1645445981905_4426411',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1645445981905_4426411',
          slider: false,
          question: {
            text: "Every serious news site has a name. What's yours?",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Pick a name',
              variables: '',
              go_to: '1650966473372_8374491',
            },
          ],
        },
        {
          acf_fc_layout: 'avatar-picker',
          tag: '1650966473372_8374491',
          identities: [659],
          confirm_button: 'This is the one! ',
          go_to: '1634122302427_2255601',
        },
        {
          acf_fc_layout: 'text',
          tag: '1634122302427_2255601',
          slider: false,
          question: {
            text: 'Not bad! What will be your job title at {{player_name}}?',
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Editor-in-chief',
              variables: 'credibility=+5',
              go_to: '1634127021743_2881691',
            },
            {
              slide: { text: '' },
              text: 'Anonymous goon',
              variables: 'credibility=-10',
              go_to: '1634126792699_7998031',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634126792699_7998031',
          slider: false,
          question: {
            text: "Anonymous goons aren't usually seen as credible journalists. What's wrong with editor-in-chief?",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Okay sure',
              variables: '',
              go_to: '1634127021743_2881691',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634127021743_2881691',
          slider: false,
          question: {
            text: "Looks like you're all set up. Other 'news' sites are beginning to notice you as well.",
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Check responses on Twitter',
              variables: '',
              go_to: '1634127141381_7374381',
            },
          ],
        },
        {
          acf_fc_layout: 'social-post',
          tag: '1634127141381_7374381',
          slider: false,
          question: {
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2021/10/UT.png',
              100,
              100,
              false,
            ],
            name: 'Utopia Today',
            tagline: 'The real news. Today.',
            show_forwarded_tag: false,
            text: '{{player_name}} has just joined the fight against the mainstream media!  #GoodNews',
          },
          answers: [
            {
              slide: {
                image: false,
                name: '',
                tagline: '',
                show_forwarded_tag: false,
                text: '',
              },
              text: 'Wow!',
              variables: 'score=+58',
              go_to: '1634127194226_7174421',
            },
            {
              slide: {
                image: false,
                name: '',
                tagline: '',
                show_forwarded_tag: false,
                text: '',
              },
              text: 'Citation needed',
              variables: 'score=+59',
              go_to: '1634127194226_7174421',
            },
          ],
        },
        {
          acf_fc_layout: 'social-post',
          tag: '1634127194226_7174421',
          slider: false,
          question: {
            image: [
              'https://www.getbadnews.com/wp-content/uploads/2021/10/DPNA.png',
              100,
              100,
              false,
            ],
            name: "Democratic People's News Agency",
            tagline: 'Glorious news from a glorious country',
            show_forwarded_tag: false,
            text: "The Democratic People's Republic supports the brilliant work of {{player_name}}! #GoodNews",
          },
          answers: [
            {
              slide: {
                image: false,
                name: '',
                tagline: '',
                show_forwarded_tag: false,
                text: '',
              },
              text: 'Wow!',
              variables: 'score=+58',
              go_to: '1634127246046_7659731',
            },
            {
              slide: {
                image: false,
                name: '',
                tagline: '',
                show_forwarded_tag: false,
                text: '',
              },
              text: 'Thanks DPNA!',
              variables: '',
              go_to: '1634127246046_7659731',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634127246046_7659731',
          slider: false,
          question: {
            text: 'Good job, chief. {{player_name}} has now become the basis of your fake news empire. ',
          },
          answers: [
            {
              slide: { text: '' },
              text: 'Hooray!',
              variables: '',
              go_to: '1634127272320_8424411',
            },
          ],
        },
        {
          acf_fc_layout: 'text',
          tag: '1634127272320_8424411',
          slider: false,
          question: {
            text: 'Now do you see how easy it is to impersonate a credible news source?',
          },
          answers: [
            {
              slide: { text: '' },
              text: 'I do! ',
              variables: '',
              go_to: 'None',
            },
          ],
        },
      ],
      chapter_title: 'IMPERSONATION',
      chapter_subtitle: '',
      badge_name: 'IMPERSONATION',
      badge_image: [
        'https://www.getbadnews.com/wp-content/uploads/2021/10/vermommen.png',
        360,
        360,
        false,
      ],
      badge_description:
        'Most people pay little attention to sources. As a purveyor of disinformation, you can use that to your advantage.',
      badge_description_expanded:
        "Impersonating someone else and disguising yourself as a credible news source can be highly effective. Most people pay little attention to sources. As a purveyor of disinformation, you can use that to your advantage. A minute ago you were just an angry citizen, now you're a big shot editor-in-chief running a real news site.",
    },
//     {
//       ID: 279,
//       title: 'Chapter 2: Emotion',
//       cards: [
//         {
//           acf_fc_layout: 'text',
//           tag: '1634637414438_9386181',
//           slider: false,
//           question: {
//             text: 'The world is your oyster, chief. But {{player_name}} needs content. Time to post your first article.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's go!",
//               variables: '',
//               go_to: '1634640427884_2571001',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1634640427884_2571001',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: { text: 'The Lives of Ants: The Joy of Routine' },
//               text: 'Post on {{player_name}}',
//               variables: 'score=-20',
//               go_to: '1634637946190_8817401',
//             },
//             {
//               slide: { text: 'The 25 most popular TV shows!' },
//               text: 'Post on {{player_name}}',
//               variables: 'score=-18',
//               go_to: '1634637946190_8817401',
//             },
//             {
//               slide: {
//                 text: 'Breaking: President to visit Luxembourg early next year',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'score=-25',
//               go_to: '1634637946190_8817401',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634637946190_8817401',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               'Happy citizen | Considering becoming a fan of {{player_name}}',
//             show_forwarded_tag: false,
//             text: 'YAAAWN. Boring! Who cares?',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Uhm..',
//               variables: '',
//               go_to: '1634638063091_9110821',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634638063091_9110821',
//           slider: false,
//           question: {
//             text: "Yikes, that didn't work. Your article didn't use any manipulation techniques, so it didn't go very far. Let's try again. What kind of content do you want to publish?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Emotional content',
//               variables:
//                 "emotioneffect=Excellent choice! Let's make people mad by attacking something. What do you want to do?",
//               go_to: '1634638389756_2993331',
//             },
//             {
//               slide: { text: '' },
//               text: 'Serious content',
//               variables:
//                 "score=-10, credibility=-5, emotioneffect=What? No! You've got to exploit people's most basic emotions first. What do you want to do? ",
//               go_to: '1634638389756_2993331',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634638389756_2993331',
//           slider: false,
//           question: { text: '{{emotioneffect}} ' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Browse exploitable news headlines',
//               variables: '',
//               go_to: '1634640655920_7727101',
//             },
//             {
//               slide: { text: '' },
//               text: 'Talk about video games instead',
//               variables: '',
//               go_to: '1634638467567_9944431',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634638467567_9944431',
//           slider: false,
//           question: {
//             text: "Look, I'm not saying I'm not interested in video games, I'm just saying you shouldn't dedicate {{player_name}} to it.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Look for something topical',
//               variables: '',
//               go_to: '1634640655920_7727101',
//             },
//             {
//               slide: { text: '' },
//               text: 'Find exploitable news headlines',
//               variables: '',
//               go_to: '1634640655920_7727101',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1634640655920_7727101',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: "Scientists: 'Climate change could have a serious negative impact on our way of life.'",
//               },
//               text: 'Attack this',
//               variables: '',
//               go_to: '1634644641520_3045461',
//             },
//             {
//               slide: {
//                 text: "Genetically modified foods pose 'no risk' to human health experts say in new report.",
//               },
//               text: 'Attack this',
//               variables: '',
//               go_to: '1634638840678_6422231',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634638840678_6422231',
//           slider: false,
//           question: {
//             text: "What's your opinion on genetically modified organisms (GMOs)?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'They will bring about the apocalypse',
//               variables: '',
//               go_to: '1634639696378_7957441',
//             },
//             {
//               slide: { text: '' },
//               text: "I really don't care",
//               variables: '',
//               go_to: '1634639113385_9692621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639113385_9692621',
//           slider: false,
//           question: {
//             text: "Tut tut, that's no way to woo your followers! What do you want to do?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Talk about climate change instead',
//               variables: '',
//               go_to: '1634639629195_5094491',
//             },
//             {
//               slide: { text: '' },
//               text: 'Change opinion on GMOs',
//               variables: '',
//               go_to: '1634639173846_9290531',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639173846_9290531',
//           slider: false,
//           question: {
//             text: "In this line of work, it's good to have a malleable opinion. So you now agree that GMOs are going to destroy the world?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Totally agree!',
//               variables: '',
//               go_to: '1634639696378_7957441',
//             },
//             {
//               slide: { text: '' },
//               text: 'Wait, no!!',
//               variables: '',
//               go_to: '1634639568310_1726071',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639568310_1726071',
//           slider: false,
//           question: {
//             text: 'Geez, you are stubborn. Remember: this is all about getting clicks and triggering your followers.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "I'll change my views",
//               variables: '',
//               go_to: '1634639696378_7957441',
//             },
//             {
//               slide: { text: '' },
//               text: 'I want to talk about the climate!',
//               variables: '',
//               go_to: '1634639629195_5094491',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639594784_8183741',
//           slider: false,
//           question: {
//             text: 'So you agree that GMOs are going to kill us all, yes?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Indeed',
//               variables: 'problem1=GMOHoax',
//               go_to: '1634639723669_3376251',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639629195_5094491',
//           slider: false,
//           question: {
//             text: "Fine, let's talk about climate change. What's your opinion of it?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Total hoax',
//               variables: '',
//               go_to: '1634644783694_7186841',
//             },
//             {
//               slide: { text: '' },
//               text: "It's a problem",
//               variables: '',
//               go_to: '1634644673477_7549281',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639696378_7957441',
//           slider: false,
//           question: {
//             text: "You're so right. Genetic modification is going way too far. What's next, genetically modified pets? It's crazy.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Indeed',
//               variables: 'problem1=GMOHoax',
//               go_to: '1634639723669_3376251',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639723669_3376251',
//           slider: false,
//           question: {
//             text: "Time to rally the crowd. Exploiting people's basic emotions usually works. What's your approach?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Personally attack scientists',
//               variables: '',
//               go_to: '1634644316668_9799331',
//             },
//             {
//               slide: { text: '' },
//               text: 'Get emotional',
//               variables: '',
//               go_to: '1634640003533_9191461',
//             },
//             {
//               slide: { text: '' },
//               text: 'Talk about GMO science',
//               variables: '',
//               go_to: '1634639760083_9932211',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634639760083_9932211',
//           slider: false,
//           question: {
//             text: 'What are you doing? This is about emotion, save the nerd talk for later! Choose something else.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Attack the scientists',
//               variables: '',
//               go_to: '1634644316668_9799331',
//             },
//             {
//               slide: { text: '' },
//               text: 'Get emotional',
//               variables: '',
//               go_to: '1634640003533_9191461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634640003533_9191461',
//           slider: false,
//           question: {
//             text: 'Emotional stories are always a good choice. Choose your weapon.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Make a meme',
//               variables: '',
//               go_to: '1634641043806_8457111',
//             },
//             {
//               slide: { text: '' },
//               text: 'Publish an article',
//               variables: '',
//               go_to: '1634640031859_7001211',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634640031859_7001211',
//           slider: false,
//           question: {
//             text: "A news article's most important asset is a good headline. In most cases, that's all people read anyway.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634640166991_3635941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634640166991_3635941',
//           slider: false,
//           question: {
//             text: "I've got a couple of options for you to choose from.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634640274371_4447471',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1634640274371_4447471',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Mother dies after eating genetically modified chicken wings',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+82, choiceeffect=You're scaring your readers shirtless with these claims., responsetweet1=I didn't know #GMOs were THAT dangerous. Oh my God! #Terrified, responsetweet2=Unbelievable that this is happening in our beautiful country. #NoMoreGMOs",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 text: 'My Story: SEVERE STOMACH PROBLEMS AFTER EATING SUPERMARKET VEGETABLES FOR YEARS',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+75, choiceeffect=A personal touch is always a good idea., responsetweet1=I'm scared. @{{player_name}}: should I start buying organic? #Doubtful, responsetweet2=Such a sad story on {{player_name}}. I'm planting my own veggies from now on.",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 text: "It's Difficult to Know What Genes We're Modifying",
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+20, choiceeffect=Nobody understands genetics that well. Calm down., responsetweet1=I didn't understand half of that but it sounds scary. #Regulate, responsetweet2=This is a terrifying admission. Who's watching the scientists? #Scared",
//               go_to: '1634645642830_4354031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634641043806_8457111',
//           slider: false,
//           question: {
//             text: 'A meme is a humorous piece of media, usually an image or GIF, that spreads from person to person on the internet.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Make one',
//               variables: '',
//               go_to: '1634641075937_1000851',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634641075937_1000851',
//           slider: false,
//           question: {
//             text: "I've got a couple of options for you to choose from.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634641103857_2751711',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634641103857_2751711',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/01-this-man-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'This man is devastated',
//                 line_2: 'He lost his whole family to GMO food ',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'credibility=+3, score=+78, choiceeffect=Personal confessions evoke empathy., responsetweet1=Stories like this keep popping up and the government is doing NOTHING. #GMOs, responsetweet2=@{{player_name}} sorry about your family. What a horrifying story. #NoMoreGMOs',
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/02-gmo-meat-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'GMO meat harmless? ',
//                 line_2: 'My dog is fighting for his life',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+83, choiceeffect=Scaring people into hating something is a wise move., responsetweet1=Sorry about your dog @{{player_name}}! Science has gone too far! #GMOs, responsetweet2=@{{player_name}} And supermarkets are still selling GMO meat as if it's nothing. #GMOHoax",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/03-gmo-food-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'GMO Food',
//                 line_2: 'Makes me so sad',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+21, choiceeffect=That one was a little bit too vague., responsetweet1=I agree with {{player_name}}. #GMOs make me sad too. #FakeScience, responsetweet2=It's a sad sad world that we live in guys. Thanks @{{player_name}} for pointing it out. #GMOs",
//               go_to: '1634645642830_4354031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644316668_9799331',
//           slider: false,
//           question: {
//             text: "Good idea! Those eggheads won't know what hit 'em. Choose your weapon.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Make a meme',
//               variables: '',
//               go_to: '1634644539808_6464261',
//             },
//             {
//               slide: { text: '' },
//               text: 'Publish an article',
//               variables: '',
//               go_to: '1634644351479_1891601',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644351479_1891601',
//           slider: false,
//           question: {
//             text: "A news article's most important asset is a good headline. In most cases, that's all people read anyway.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634644396804_1867871',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644396804_1867871',
//           slider: false,
//           question: { text: "I've got a few options for you to choose from." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634644420532_246261',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1634644420532_246261',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Long Term Reliability of GMO Foods Under Dispute',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+23, choiceeffect=Long-term reliability doesn't exactly raise any hairs., responsetweet1=Isn't the whole point of science to talk about the long term? #LosingMyReligion, responsetweet2=We know GMO research is under dispute. Including the mice they're tested on. #Sad",
//               go_to: '1634645642830_4354031',
//             },
//             {
//               slide: { text: 'CAUGHT: GMO scientist only buys ORGANIC FOOD' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'credibility=+3, score=+81, choiceeffect=Scientists can be hypocrites too!, responsetweet1=Hypocrites. I always buy organic. Stupid eggheads. #SayNoToScience, responsetweet2=The hypocrisy is staggering. STAGGERING. Thanks @{{player_name}} for pointing it out. #GoodJournalism',
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: { text: 'Pro GMO study fully funded by BIG PHARMA' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+93, choiceeffect=Corruption accusations work wonders., responsetweet1=Good point by {{player_name}}: is this whole business corrupt or what? #Corruption, responsetweet2=So we're letting these bozos get away with blatant corruption? #BigPharma",
//               go_to: '1634645697494_701051',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644539808_6464261',
//           slider: false,
//           question: {
//             text: 'A meme is a humorous piece of media, usually an image or GIF, that spreads from person to person on the internet. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's make one",
//               variables: '',
//               go_to: '1634644569690_6815451',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644569690_6815451',
//           slider: false,
//           question: { text: "I've got a few options for you to choose from." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634644589698_9037561',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634644589698_9037561',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/04-he-used-to-be-a-gmo-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'He used to be a typical GMO scientist',
//                 line_2: 'until he snapped',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'credibility=+3, score=+83, choiceeffect=Hannibal Lecter is terrifying., responsetweet1=Scary to know that there are scientists like that out there. #Outraged, responsetweet2={{player_name}} is right! Science has gone crazy!!!',
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/05-bad-science-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Bad science',
//                 line_2: 'is bad science',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+76, choiceeffect=Bad science is bad science indeed., responsetweet1=This is SPARTA! {{player_name}} is right. Bad science is bad. #TimeToStop, responsetweet2=It's true. We're not safe. #GMOs are horrifying and no one wants to say it. #BadScience",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/06-back-in-my-day-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Back in my day',
//                 line_2: 'science was ok',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+21, choiceeffect=That cranky old man isn't saying much., responsetweet1=Back in MY day scientism was an honorable profession. #Sad, responsetweet2=It's true. Science really has gone downhill. #StopTheMadness",
//               go_to: '1634645642830_4354031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644641520_3045461',
//           slider: false,
//           question: {
//             text: "Good choice. What's your opinion on climate change?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Total hoax',
//               variables: '',
//               go_to: '1634644783694_7186841',
//             },
//             {
//               slide: { text: '' },
//               text: 'A serious problem',
//               variables: '',
//               go_to: '1634644673477_7549281',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644673477_7549281',
//           slider: false,
//           question: {
//             text: "Boring! Everyone else is already saying that. You won't get any followers by parroting them. What do you want to do?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Talk about GMOs instead',
//               variables: '',
//               go_to: '1634638840678_6422231',
//             },
//             {
//               slide: { text: '' },
//               text: 'Change opinion about climate change',
//               variables: '',
//               go_to: '1634644699128_1260361',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644699128_1260361',
//           slider: false,
//           question: {
//             text: 'Very wise. So you agree that climate change is a complete hoax?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'I do now!',
//               variables: '',
//               go_to: '1634644757690_1774761',
//             },
//             {
//               slide: { text: '' },
//               text: 'No, wait!',
//               variables: '',
//               go_to: '1634644727901_3531081',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644727901_3531081',
//           slider: false,
//           question: {
//             text: "Wow, you're stubborn. Remember: this is about getting followers and clicks, and nothing else! ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Change opinion about climate change',
//               variables: '',
//               go_to: '1634644757690_1774761',
//             },
//             {
//               slide: { text: '' },
//               text: 'Talk about GMOs instead',
//               variables: '',
//               go_to: '1634638840678_6422231',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644757690_1774761',
//           slider: false,
//           question: {
//             text: "Excellent. Your opinion is malleable. It's all about getting clicks. Now it's time to make some content.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Indeed!',
//               variables: '',
//               go_to: '1634644813651_9827461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644783694_7186841',
//           slider: false,
//           question: {
//             text: 'Oh it\u2019s a total hoax, and a very polarizing one at that. Should be easy to get people worked up over it.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'I know, right?',
//               variables: '',
//               go_to: '1634644813651_9827461',
//             },
//             {
//               slide: { text: '' },
//               text: 'Easy-peasy',
//               variables: '',
//               go_to: '1634644813651_9827461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644813651_9827461',
//           slider: false,
//           question: {
//             text: "Exploiting people's basic emotions can be hugely effective. How do you want to do this?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Personally attack scientists',
//               variables: 'problem1=ClimateHoax',
//               go_to: '1634644921967_8439311',
//             },
//             {
//               slide: { text: '' },
//               text: 'Get emotional',
//               variables: 'problem1=ClimateHoax',
//               go_to: '1634645226002_3344481',
//             },
//             {
//               slide: { text: '' },
//               text: 'Talk about science',
//               variables: 'problem1=ClimateHoax',
//               go_to: '1634645719129_7677871',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644921967_8439311',
//           slider: false,
//           question: {
//             text: 'Attacking those eggheads, smart move! Choose your weapon.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Make a meme',
//               variables: '',
//               go_to: '1634645127994_4135341',
//             },
//             {
//               slide: { text: '' },
//               text: 'Publish an article',
//               variables: '',
//               go_to: '1634644945847_5922551',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644945847_5922551',
//           slider: false,
//           question: {
//             text: "A news article's most important asset is a good headline. In most cases, that's all people read anyway.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634644966464_8562991',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634644966464_8562991',
//           slider: false,
//           question: { text: "I've got a few options for you to choose from." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check options',
//               variables: '',
//               go_to: '1634644989083_9766171',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1634644989083_9766171',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: "SCIENTISTS: 'CLIMATE CHANGE WILL DESTROY THE WORLD'",
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+83, choiceeffect=Everyone hates fearmongering scientists., responsetweet1=That's right @{{player_name}}. 'Destroy' is the code word du jour. #ScienceDontScareMe, responsetweet2=It's like this all the time. report - scare - get funding - repeat.",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 text: 'SCIENTISTS USE DIFFICULT WORDS TO DESCRIBE COMPLEX ISSUES',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+23, choiceeffect=Difficult words are difficult!, responsetweet1=Just like all scientists I have no idea about complex climate systems either. #Priorities, responsetweet2=How come they can't make science understandable? Hmm? #Idiots #Corrupt",
//               go_to: '1634645642830_4354031',
//             },
//             {
//               slide: { text: 'Do we really KNOW the climate is changing?' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+78, choiceeffect=Attacking scientists' expertise always works., responsetweet1=I don't trust science. Never have. Remember when science said the world was flat? I do. #LocalKnowledge, responsetweet2=Yeah! Do we REALLY know? Can't this 'warming' come from solar flares or something? #QuestionIt",
//               go_to: '1634645697494_701051',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645127994_4135341',
//           slider: false,
//           question: {
//             text: 'A meme is a humorous piece of media, usually an image or GIF, that spreads from person to person on the internet. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's get to it",
//               variables: '',
//               go_to: '1634645146072_8525071',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645146072_8525071',
//           slider: false,
//           question: { text: "I've got a few options for you to choose from. " },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634645173691_8145661',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634645173691_8145661',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/07-science-says-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Science says climate will change',
//                 line_2: "but can't even predict the rain!",
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'credibility=+3, score=+83, choiceeffect=Attacking their basic competence., responsetweet1=Good point by {{player_name}}: OVERCONFIDENT EGGHEADS!!!, responsetweet2=Ivory towers are traditionally well insulated. Too well insulated if you ask me.',
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/08-relax-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Relax!',
//                 line_2: 'Climate change is still the biggest threat...',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'credibility=+3, score=+78, choiceeffect=Death by asteroid is terrifying., responsetweet1=I definitely prefer a bit more sunshine over an outsized asteroid to the face. #Priorities, responsetweet2=Exactly @{{player_name}}. How come a warmer planet is seen as an existential threat anyway??',
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/09-shoud-science-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Should science focus on climate change',
//                 line_2: 'Or make better pacifiers? ',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'credibility=+3, score=+18, choiceeffect=That was a bit of a vague meme., responsetweet1=#FakeNews! This focus on the climate is going too far. #Sad, responsetweet2=Climate scientists are bad at their jobs. What are we even paying them for? #Defund',
//               go_to: '1634645642830_4354031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645226002_3344481',
//           slider: false,
//           question: {
//             text: 'Emotional stories are always a good choice. Choose your weapon.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Make a meme',
//               variables: '',
//               go_to: '1634645541641_3370771',
//             },
//             {
//               slide: { text: '' },
//               text: 'Publish an article',
//               variables: '',
//               go_to: '1634645265893_8205341',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645265893_8205341',
//           slider: false,
//           question: {
//             text: "A news article's most important asset is a good headline. In most cases, that's all people read anyway.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634645288572_5985571',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645288572_5985571',
//           slider: false,
//           question: { text: "I've got a few options for you to choose from." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634645314569_2613231',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1634645314569_2613231',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'EXPECTING MOTHER TOLD: NOT HAVING KIDS IS BETTER FOR THE CLIMATE',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+83, choiceeffect=Pitting scientists against expecting mothers is sure to make people angry., responsetweet1={{player_name}}'s climate baby story is the most amazing thing I've ever heard. #Insanity, responsetweet2=Wow so climate eugenics is a thing now huh? #DangerDanger",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 text: "STATISTICAL METHODS IN CLIMATE SCIENCE 'CLUNKY'",
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+23, choiceeffect=Statistics schmatistics! Who cares?, responsetweet1=Ten years of math education and you science guys still can't figure it out? #Weak, responsetweet2=Look I don't pretend to understand statistics but apparently the eggheads don't either. #Sad",
//               go_to: '1634645642830_4354031',
//             },
//             {
//               slide: {
//                 text: 'SCIENTIST "FRIEND": He told me I was saving the planet by living on the streets',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+78, choiceeffect=You made scientists look cruel and out of touch., responsetweet1=Yes good point by {{player_name}}. They're so out of touch they don't care about people anymore. #ScienceNo, responsetweet2=PEOPLE ARE SUFFERING! ARE ALL SCIENTISTS INSANE? #{{player_name}}",
//               go_to: '1634645697494_701051',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645541641_3370771',
//           slider: false,
//           question: {
//             text: 'A meme is a humorous piece of media, usually an image or GIF, that spreads from person to person on the internet. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Make one',
//               variables: '',
//               go_to: '1634645561367_7785231',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645561367_7785231',
//           slider: false,
//           question: { text: "I've got a few options for you to choose from." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out the options',
//               variables: '',
//               go_to: '1634645585976_8102181',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634645585976_8102181',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/10-apparently-i-was-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Apparently I was ruining the planet',
//                 line_2: 'Keeping my baby warm ',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+83, choiceeffect=Everybody wants babies to be warm., responsetweet1=I can't resist that meme's sad puppy eyes. #DownWithScience!, responsetweet2=Wait so now scientists are demanding that babies freeze to save the CLIMATE? #Insane",
//               go_to: '1634645697494_701051',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/11-global-warming-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Global warming? ',
//                 line_2: "I wouldn't mind a bit of heat",
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=+3, score=+23, choiceeffect=It's not exactly an emotional testimony., responsetweet1={{player_name}} makes a good point. We have to take care of people before we fix the climate!, responsetweet2=It's true: real humans are suffering because of this HOAX!!11 ",
//               go_to: '1634645642830_4354031',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/12-climate-sciencists-confess-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'Climate scientists confess',
//                 line_2: "'only in it for the money'!!! Sad!",
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "credibility=-3, score=+83, choiceeffect=Great use of hyperbole., responsetweet1=I knew it! They're getting rich off of this , responsetweet2=And I thought they were honest professionals! Boy was I wrong!",
//               go_to: '1634645697494_701051',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645642830_4354031',
//           slider: false,
//           question: {
//             text: 'Hmm, not great. {{choiceeffect}} This is about emotions first. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634645663757_2474781',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645663757_2474781',
//           slider: false,
//           question: {
//             text: "Still, you got a couple of followers. How do you think they'll react?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check responses',
//               variables: '',
//               go_to: '1634645766332_7373071',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645697494_701051',
//           slider: false,
//           question: {
//             text: "Not bad! {{choiceeffect}} You got a couple of followers. How do you think they'll react?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check tweets',
//               variables: '',
//               go_to: '1634645766332_7373071',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634645719129_7677871',
//           slider: false,
//           question: {
//             text: 'What are you doing? Science talk is boring! Save it for later. Please choose a different option.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Attack the scientists',
//               variables: '',
//               go_to: '1634644921967_8439311',
//             },
//             {
//               slide: { text: '' },
//               text: 'Get emotional',
//               variables: '',
//               go_to: '1634645226002_3344481',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634645766332_7373071',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline: 'Angry citizen | Fan of {{player_name}}',
//             show_forwarded_tag: false,
//             text: '{{responsetweet1}} #{{problem1}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'More',
//               variables: '',
//               go_to: '1634646065487_5950821',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634646065487_5950821',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/image-4.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'My kids are alright. | {{player_name}} is great',
//             show_forwarded_tag: false,
//             text: '{{responsetweet2}} #{{problem1}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Looks good',
//               variables: 'score=+98',
//               go_to: '1634646163766_2642821',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634646163766_2642821',
//           slider: false,
//           question: {
//             text: "Your followers look like they're ready to blow. And all you did was play into their basic emotions a bit. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Not bad!',
//               variables: '',
//               go_to: '1634646186797_7984641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634646186797_7984641',
//           slider: false,
//           question: {
//             text: "Let's keep going. Now that you get the idea, what basic emotion do you want to exploit next?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Fear',
//               variables: '',
//               go_to: '1634646216269_7869051',
//             },
//             {
//               slide: { text: '' },
//               text: 'Anger',
//               variables: '',
//               go_to: '1634646245805_6230291',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634646216269_7869051',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/13-danger-840x612.jpg',
//               840,
//               612,
//               true,
//             ],
//             line_1: '!!! DANGER !!!',
//             line_2: 'Vitamin C pills contain nuclear waste! ',
//           },
//           answers: [
//             {
//               slide: { image: false, line_1: '', line_2: '' },
//               text: 'Post on {{player_name}}',
//               variables: 'score=+79, credibility=+5',
//               go_to: '1634646272971_5733271',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634646245805_6230291',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/15-they-test-840x612.jpg',
//               840,
//               612,
//               true,
//             ],
//             line_1: 'They test anti-aircraft guns',
//             line_2: 'on innocent puppies!',
//           },
//           answers: [
//             {
//               slide: { image: false, line_1: '', line_2: '' },
//               text: 'Post on {{player_name}}',
//               variables: 'score=+79, credibility=+5',
//               go_to: '1634646272971_5733271',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634646272971_5733271',
//           slider: false,
//           question: {
//             text: "See? The content doesn't really matter. It's the use of emotional language that gets you followers.",
//           },
//           answers: [
//             { slide: { text: '' }, text: 'True!', variables: '', go_to: '' },
//             {
//               slide: { text: '' },
//               text: 'I hear ya',
//               variables: '',
//               go_to: '',
//             },
//           ],
//         },
//       ],
//       chapter_title: 'EMOTION',
//       chapter_subtitle: '',
//       badge_name: 'EMOTION',
//       badge_image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/fear.png',
//         422,
//         422,
//         false,
//       ],
//       badge_description:
//         'Emotional content can be extremely effective if you want your news to go viral.',
//       badge_description_expanded:
//         'Playing into basic emotions such as fear, anger and empathy make people more susceptible to your message. ',
//     },
//     {
//       ID: 332,
//       title: 'Chapter 3: Polarisation',
//       cards: [
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821118497_6214391',
//           slider: false,
//           question: {
//             text: 'So now that your followers are duly enraged, how about we give them another push?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Can't say no to that!",
//               variables: '',
//               go_to: '1634821142774_9486911',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821142774_9486911',
//           slider: false,
//           question: {
//             text: "That's the spirit. What do you want get people worked up about, something fake or something real?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Something fake',
//               variables: '',
//               go_to: '1634821220189_6152491',
//             },
//             {
//               slide: { text: '' },
//               text: 'Something real',
//               variables: '',
//               go_to: '1634821163530_6159351',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821163530_6159351',
//           slider: false,
//           question: {
//             text: "Good choice. You don't always have to make everything up yourself. It's often easier to blow an existing story way out of proportion by playing into people's emotions and political biases.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Sounds good',
//               variables: '',
//               go_to: '1634821188673_4690561',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821188673_4690561',
//           slider: false,
//           question: {
//             text: "Social media is full of potential scandals you can amplify. Let's drive left and right apart. The centre is no longer an option!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Find a Twitter controversy',
//               variables: '',
//               go_to: '1634821316340_8162201',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821220189_6152491',
//           slider: false,
//           question: {
//             text: 'Hey, not so fast! Making fake news has downsides too, you know.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Such as?',
//               variables: '',
//               go_to: '1634821259910_6548831',
//             },
//             {
//               slide: { text: '' },
//               text: "No it doesn't!",
//               variables: '',
//               go_to: '1634821239683_5681891',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821239683_5681891',
//           slider: false,
//           question: {
//             text: 'It kind of does. Making stuff up out of thin air tends to hurt your credibility. But there are other ways to achieve your goals.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Really',
//               variables: '',
//               go_to: '1634821297305_1658641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821259910_6548831',
//           slider: false,
//           question: {
//             text: 'Such as getting caught in a really obvious lie. It hurts your credibility. But there are other ways to achieve the same goal.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Really?',
//               variables: '',
//               go_to: '1634821297305_1658641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821297305_1658641',
//           slider: false,
//           question: {
//             text: "Of course. Social media is full of real news that you can amplify by playing into people's emotions and political biases.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Find a Twitter controversy',
//               variables: '',
//               go_to: '1634821316340_8162201',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634821316340_8162201',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/Susan.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'Susan',
//                 tagline: 'Manager | 31 followers',
//                 show_forwarded_tag: false,
//                 text: "That's the second accidental chemical spill in 4 months. Our town's river is turning a bit yellow... #questions",
//               },
//               text: 'I like this one!',
//               variables: 'person1=Susan, issue=SpillingScandal',
//               go_to: '1634823468535_3507991',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/Joe.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'Joe',
//                 tagline: 'Lawyer | 33 followers',
//                 show_forwarded_tag: false,
//                 text: "So they're building a new power plant in my town but no one wants it here.. #BriberyMaybe?",
//               },
//               text: "Let's do this",
//               variables: 'person1=Joe, issue=BriberyScandal',
//               go_to: '1634822295101_5665241',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/Jolene.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'Jolene',
//                 tagline: 'Astrophysicist | 21 followers',
//                 show_forwarded_tag: false,
//                 text: 'Wow.. just saw the police arrest a guy.. scary stuff! #AreWeSafe?',
//               },
//               text: "This one's perfect",
//               variables: 'person1=Jolene, issue=Crime',
//               go_to: '1634821396869_9209371',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821396869_9209371',
//           slider: false,
//           question: {
//             text: "Not bad. {{person1}} wasn't being very specific in her tweet. You can take any angle you like.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'How do you mean?',
//               variables: '',
//               go_to: '1634821416131_1127041',
//             },
//             {
//               slide: { text: '' },
//               text: 'Nice!',
//               variables: '',
//               go_to: '1634821416131_1127041',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821416131_1127041',
//           slider: false,
//           question: {
//             text: "There are two angles to Jolene's story that you can exploit: police brutality or rising crime rates. Which one do you prefer?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Police brutality',
//               variables:
//                 'blame1=The police force is, blame2=rising crime rates, target=right-wing, friend=left-wing',
//               go_to: '1634821840874_1714601',
//             },
//             {
//               slide: { text: '' },
//               text: 'Rising crime rates',
//               variables:
//                 'blame1=Violent criminals are, blame2=police brutality, target=left-wing, friend=right-wing',
//               go_to: '1634821446543_7551131',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821446543_7551131',
//           slider: false,
//           question: {
//             text: "A traditionally {{friend}} angle. Good choice. But you could have gone with a {{target}} angle just as well. It doesn't matter: choose a side and demonize your target as much as possible.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634821462035_3226991',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821462035_3226991',
//           slider: false,
//           question: {
//             text: 'Problem is: {{person1}} has about 20 followers if not less. No one cares what she has to say.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'But I care!',
//               variables: "nicety=You're too good for this world.",
//               go_to: '1634821490283_9493501',
//             },
//             {
//               slide: { text: '' },
//               text: "World's smallest violin, Jolene",
//               variables:
//                 'nicety=Very funny. Do you do stand-up comedy as well?',
//               go_to: '1634821511704_3939231',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821490283_9493501',
//           slider: false,
//           question: {
//             text: "{{nicety}} Anyway, let's jack Jolene's story up a bit. Where to?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'To Twitter!',
//               variables: '',
//               go_to: '1634821536410_6556421',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821511704_3939231',
//           slider: false,
//           question: {
//             text: '{{nicety}} Seriously though, her story could use some attention. Where to?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'To Twitter!',
//               variables: '',
//               go_to: '1634821536410_6556421',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634821536410_6556421',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: '{{person1}} points out some interesting issues with rising crime in her area. #SafetyFirst',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=+5, credibility=+2',
//               go_to: '1634821567418_3453571',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821567418_3453571',
//           slider: false,
//           question: {
//             text: "Huh, look at that. Almost no extra followers. That's what you get if you don't use any buzzwords.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What now?',
//               variables: '',
//               go_to: '1634821586011_3307241',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821586011_3307241',
//           slider: false,
//           question: {
//             text: "Probably best to stick to our guns and do what we do well: playing into people's emotions. What's your weapon of choice?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Meme',
//               variables: '',
//               go_to: '1634821612571_436141',
//             },
//             {
//               slide: { text: '' },
//               text: 'Article',
//               variables: '',
//               go_to: '1636991689554_4353921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634821612571_436141',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/16-is-criminals-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: "IS 'CRIMINALS' STILL POLITICALLY CORRECT?",
//                 line_2: "OR IS IT 'JUDICIALLY CHALLENGED' NOW?",
//               },
//               text: 'Post it',
//               variables:
//                 'score=+113, credibility=+5, origin=articles, spilleffect=Everyone loves Exasperated Tommy Lee Jones.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/17-ill-have-you-know-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: "I'LL HAVE YOU KNOW ",
//                 line_2: 'STATISTICALLY, CRIME IS ON THE RISE ',
//               },
//               text: 'Yes SpongeBob!',
//               variables:
//                 "score=+42, credibility=-3, origin=articles, spilleffect=It's not easy to make a SpongeBob meme boring but you did it.",
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/18-so-many-criminals-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'SO MANY',
//                 line_2: 'CRIMINALS ',
//               },
//               text: 'Post this',
//               variables:
//                 'score=+118, credibility=+5, origin=articles, spilleffect=Short but sweet. Very effective.',
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636991689554_4353921',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: { text: 'Violent crime on the rise! Lock your doors ' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "score=+14, credibility=+5, origin=articles, spilleffect=That ought to scare 'em.",
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: { text: 'Small but significant uptake in crime rates' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "score=+43, credibility=-3, origin=articles, spilleffect=Remember! Don't be boring!",
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: { text: 'Drug addict destroys mall and KIDNAPS family ' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "score=+111, credibility=+5, origin=articles, spilleffect=Is it over the top? Don't think so!",
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821840874_1714601',
//           slider: false,
//           question: {
//             text: "A traditionally {{friend}} angle. Good choice. But you could have gone with a {{target}} angle just as well. It doesn't matter: choose a side and demonize your target as much as possible.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634821919683_9482181',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821919683_9482181',
//           slider: false,
//           question: {
//             text: 'Problem is: {{person1}} has about 20 followers if not less. No one cares what she has to say.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'But I care!',
//               variables: "nicety=You're an angel.",
//               go_to: '1634821949843_9725181',
//             },
//             {
//               slide: { text: '' },
//               text: 'Cry me a river, {{person1}}',
//               variables:
//                 'nicety=Haha. Ha. I wish circus clowns were as funny as you. ',
//               go_to: '1634821968574_2023801',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821949843_9725181',
//           slider: false,
//           question: {
//             text: "{{nicety}} Anyway, let's jack Jolene's story up a bit.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Tweet something',
//               variables: '',
//               go_to: '1634821986252_257121',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634821968574_2023801',
//           slider: false,
//           question: {
//             text: '{{nicety}} But seriously, her story needs some attention.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'To Twitter!',
//               variables: '',
//               go_to: '1634821986252_257121',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634821986252_257121',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "{{person1}}'s story points out some of the issues associated with police behavior #{{issue}}",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=+36',
//               go_to: '1634822012181_4226441',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822012181_4226441',
//           slider: false,
//           question: {
//             text: "Huh. Looks like nobody cares about {{person1}}. That's what you get if you don't use any buzzwords.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What do we do?',
//               variables: '',
//               go_to: '1634822027222_9353781',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822027222_9353781',
//           slider: false,
//           question: {
//             text: "Let's stick to what we're good at: playing into people's emotions. And don't be afraid to exaggerate. What's your weapon of choice?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Meme',
//               variables: '',
//               go_to: '1634822191747_9780171',
//             },
//             {
//               slide: { text: '' },
//               text: 'Article',
//               variables: '',
//               go_to: '1636996761523_944621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636996761523_944621',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Local police beat man into a COMA in front of daughter',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'score=+15, credibility=+5, origin=articles, spilleffect=A little bit of conjecture can work wonders.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 text: 'Police implicated in beating. Investigation ongoing',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'score=+5, credibility=-3, origin=articles, spilleffect=Ongoing investigations are boooriiing!',
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: { text: 'Police officers caught beating up unarmed man ' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "score=+15, credibility=+5, origin=articles, spilleffect=That's a LOT of conjecture. But who cares?",
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634822191747_9780171',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/19-broccoli-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'POLICE TOLD HIM TO EAT BROCCOLI',
//                 line_2: 'HE REFUSED ',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'score=+120, credibility=+5, origin=memes, spilleffect=Great use of hyperbole.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/20-know-that-when-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'KNOW THAT WHEN YOU SEE THIS ',
//                 line_2: "THEY'RE COMING FOR YOU!!!",
//               },
//               text: 'Post this',
//               variables:
//                 'score=+124, credibility=+5, origin=memes, spilleffect=That ought to scare some folks.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/21-chasing-bad-guys-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'THE POLICE FORCE',
//                 line_2: 'ALWAYS CHASING BAD GUYS ',
//               },
//               text: 'Haha yes!',
//               variables:
//                 'score=+21, credibility=-3, origin=memes, spilleffect=That was a bit of a strange meme really.',
//               go_to: '1634824234262_8397481',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822295101_5665241',
//           slider: false,
//           question: {
//             text: "Good choice. It's easy to turn Joe's story into a huge scandal. From which angle is up to you.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's do this!",
//               variables: '',
//               go_to: '1634822316747_8754941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822316747_8754941',
//           slider: false,
//           question: {
//             text: "Every story worth hearing has a villain. Joe's story has two possible angles: either corporations are to blame, or the government is. What's your target?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'The government',
//               variables:
//                 'blame1=The government is, blame2=big corporations, target=left-wing, friend=right-wing',
//               go_to: '1634822821479_88381',
//             },
//             {
//               slide: { text: '' },
//               text: 'Big corporations',
//               variables:
//                 'blame1=Big corporations are, blame2=the government, target=right-wing, friend=left-wing',
//               go_to: '1634822806822_9416541',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822354782_2028791',
//           slider: false,
//           question: {
//             text: "The only problem: Joe has like 30 followers. That's nothing. No one cares about him or his story.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Aww...',
//               variables: 'nicety=Such a compassionate individual you are.',
//               go_to: '1634822414025_6155701',
//             },
//             {
//               slide: { text: '' },
//               text: 'Oh boo hoo!',
//               variables:
//                 "nicety=There's a time and place for everything. Especially sarcasm.",
//               go_to: '1634822414025_6155701',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822414025_6155701',
//           slider: false,
//           question: {
//             text: "{{nicety}} Anyway, let's give {{person1}}'s story a bit of schwung.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Start with a tweet',
//               variables: '',
//               go_to: '1634822440623_9867521',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634822440623_9867521',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "{{person1}}'s case points out some clear issues with corporate influence in this country. #{{issue}}",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=+21',
//               go_to: '1634822478424_4056481',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822478424_4056481',
//           slider: false,
//           question: {
//             text: "Well, that was a dud. Nobody cares about Joe, because your tweet didn't use any buzzwords. You need to pump up those numbers!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'How?',
//               variables: '',
//               go_to: '1634822495343_4637331',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822495343_4637331',
//           slider: false,
//           question: {
//             text: "Well, let's just do what we do best: playing into people's emotions. Choose your weapon. And don't be afraid to exaggerate!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Article',
//               variables: '',
//               go_to: '1636996901940_9363791',
//             },
//             {
//               slide: { text: '' },
//               text: 'Meme',
//               variables: '',
//               go_to: '1634822579277_129351',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636996901940_9363791',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: { text: 'Corporation building polluting power plant ' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'score=+115, credibility=+5, origin=articles, spilleffect=Great use of hyperbole and conjecture.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 text: 'Power plant might be in violation of local building code ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'score=+25, credibility=-3, origin=articles, spilleffect=Building codes are REALLY dull.',
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 text: 'Multinational DESTROYING local town to build HUGE power plant ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "score=+115, credibility=+5, origin=articles, spilleffect=Panic. Words. Capslock. Your article's got it all!",
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634822579277_129351',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/22-coal-fumes-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'AND THEN WE TOLD THE TOWN',
//                 line_2: '"DON\'T WORRY! COAL FUMES ARE HEALTHY!"',
//               },
//               text: 'Love it!',
//               variables:
//                 'score=+135, credibility=+5, origin=memes, spilleffect=Good job impersonating evil corporate overlords.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/23-huzzaah-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'HUZZAAH! MORE PHOSPHATES AND NITRATES ',
//                 line_2: 'IN THE RIVER',
//               },
//               text: "That's the one!",
//               variables:
//                 "score=+25, credibility=-3, origin=memes, spilleffect=What? Phosphates? Don't be boring!",
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/24-corporations-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'CORPORATIONS WANT YOU TO BELIEVE ',
//                 line_2: 'THE AIR HAS NEVER BEEN CLEANER! ',
//               },
//               text: 'Yep!',
//               variables:
//                 'score=+115, credibility=+5, origin=memes, spilleffect=Your followers are disgusted by corporate greed.',
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822806822_9416541',
//           slider: false,
//           question: {
//             text: "A traditionally {{friend}} angle. Good choice. But you could have gone with a {{target}} angle just as well. It doesn't matter: choose a side and demonize your target as much as possible.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634822354782_2028791',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822821479_88381',
//           slider: false,
//           question: {
//             text: "A traditionally {{friend}} angle. Good choice. But you could have gone with a {{target}} angle just as well. It doesn't matter: choose a side and demonize your target as much as possible.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634822837389_4864041',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822837389_4864041',
//           slider: false,
//           question: {
//             text: "The only problem: Joe has like 30 followers. That's nothing. No one cares about him or his story.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Poor Joe..',
//               variables: '',
//               go_to: '1634822893065_8138091',
//             },
//             {
//               slide: { text: '' },
//               text: "World's smallest violin, Joe",
//               variables: '',
//               go_to: '1634822859494_6569591',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822859494_6569591',
//           slider: false,
//           question: {
//             text: "Easy there, chief. Sarcasm works best during family dinners or when you're going through airport customs.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Post a tweet',
//               variables: '',
//               go_to: '1634822910449_2493781',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822893065_8138091',
//           slider: false,
//           question: {
//             text: "Yeah, it's very sad. So let's blow his story out of proportion.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Start with a tweet',
//               variables: '',
//               go_to: '1634822910449_2493781',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634822910449_2493781',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "{{person1}}'s story is a good example of some of the problems with our government. #SharingIsCaring",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet',
//               variables: 'score=+33',
//               go_to: '1634822935265_9970591',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822935265_9970591',
//           slider: false,
//           question: {
//             text: "Well, that didn't seem to do much. You didn't use any buzzwords, so no one cares about {{person1}}'s story.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What do we do?',
//               variables: '',
//               go_to: '1634822947451_2869221',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634822947451_2869221',
//           slider: false,
//           question: {
//             text: "We do what we always do: playing into people's emotions. What's your weapon of choice?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Meme',
//               variables: '',
//               go_to: '1634822969041_7197831',
//             },
//             {
//               slide: { text: '' },
//               text: 'Article',
//               variables: '',
//               go_to: '1636997074304_1328231',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634822969041_7197831',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/25-the-government-serving-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'THE GOVERNMENT',
//                 line_2: 'SERVING THE PEOPLE ',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'score=+115, credibility=+5, origin=memes, spilleffect=Smart move to focus on corruption.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/26-power-from-a-plant-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'WHEN THEY TELL YOU ',
//                 line_2: 'YOUR POWER WILL COME FROM A PLANT ',
//               },
//               text: 'Post this!',
//               variables:
//                 'score=+35, credibility=-3, spilleffect=What a weird choice. No one understands that one., origin=memes',
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/27-so-happy-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'SO HAPPY',
//                 line_2: 'OUR GOVERNMENT LOOKS AFTER US ',
//               },
//               text: 'Love it ',
//               variables:
//                 "score=+145, credibility=+5, spilleffect=That's how you make government look evil., origin=memes",
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636997074304_1328231',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Locals outraged: government pushes through power plant proposal ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "spilleffect=Everyone's sympathetic towards outraged locals., score=+115, credibility=+5, origin=articles",
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 text: "Government builds new power plant. Experts: 'Rather inefficient'",
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'spilleffect=What an uninspired article., score=+24, credibility=-3, origin=articles',
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 text: 'BILLIONS to build INSANELY INEFFICIENT new power plant ',
//               },
//               text: 'Love it! ',
//               variables:
//                 'spilleffect=Great clickbait. And great use of capital letters., score=+115, credibility=+5, origin=articles',
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823468535_3507991',
//           slider: false,
//           question: {
//             text: "Good choice! No one likes chemical spills. Susan's story could become a huge scandal if you play your cards right.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's do this",
//               variables: '',
//               go_to: '1634823482192_436841',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823482192_436841',
//           slider: false,
//           question: {
//             text: "There are two possible angles here: either corporations are to blame, or the government is. Who's your target?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'The government',
//               variables:
//                 'blame1=The government is, blame2=big corporations, friend=right-wing, target=left-wing',
//               go_to: '1634823521517_8949491',
//             },
//             {
//               slide: { text: '' },
//               text: 'Big corporations',
//               variables:
//                 'blame1=Big corporations are, blame2=the government, friend=left-wing, target=right-wing',
//               go_to: '1634824258304_6685691',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823521517_8949491',
//           slider: false,
//           question: {
//             text: "A traditionally {{friend}} angle. Good choice. But you could have gone with a {{target}} angle just as well. It doesn't matter: choose a side and demonize your target as much as possible.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634823571645_8795311',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823571645_8795311',
//           slider: false,
//           question: {
//             text: 'The only problem is: Susan has almost no followers. No one cares about her story. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'But I care!',
//               variables: '',
//               go_to: '1634823601715_69391',
//             },
//             {
//               slide: { text: '' },
//               text: "World's smallest violin, Susan",
//               variables: '',
//               go_to: '1634823587900_6843941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823587900_6843941',
//           slider: false,
//           question: {
//             text: "Haha! Good one. But please save the sarcasm for the dinner table and when you're going through airport customs.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Take to Twitter',
//               variables: '',
//               go_to: '1634823862267_2573921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823601715_69391',
//           slider: false,
//           question: {
//             text: "Yes, it's a tragedy. So let's blow her story out of proportion. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Start with a tweet',
//               variables: '',
//               go_to: '1634823862267_2573921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634823862267_2573921',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "@Susan's story is a good example of how the government is currently lacking capacity #{{issue}}",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=+35',
//               go_to: '1634823894642_7307931',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823894642_7307931',
//           slider: false,
//           question: {
//             text: "Hmm, that didn't seem to get a lot of attention. You didn't use any buzzwords, so your followers aren't exactly enthusiastic.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What do we do?',
//               variables: '',
//               go_to: '1634823935694_2095801',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634823935694_2095801',
//           slider: false,
//           question: {
//             text: "We do what we do best: playing into people's emotions. What's your weapon?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Article',
//               variables: '',
//               go_to: '1636997232541_4745151',
//             },
//             {
//               slide: { text: '' },
//               text: 'Meme',
//               variables: '',
//               go_to: '1634823956644_6314601',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634823956644_6314601',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/28-chemical-spill-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'CHEMICAL SPILL IN LOCAL TOWN',
//                 line_2: "GOVERNMENT BE LIKE: 'EVERYTHING IS FINE!'",
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'score=+120, credibility=+5, origin=memes, spilleffect=Scaring people with toxic barrels is nothing short of genius.',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/29-britney-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'I TOLD THE GOVERNMENT IN 2003 ALREADY ',
//                 line_2: '"DON\'T YOU KNOW THAT YOU\'RE TOXIC?"',
//               },
//               text: 'Post it!',
//               variables:
//                 'score=+35, credibility=-3, spilleffect=That reference is probably a bit outdated., origin=memes',
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/30-nothing-to-see-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'GOVERNMENT BE LIKE ',
//                 line_2: '"NOTHING TO SEE HERE"',
//               },
//               text: 'Love it!',
//               variables:
//                 'score=+115, credibility=+5, spilleffect=People love it when you get all political., origin=memes',
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636997232541_4745151',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: { text: 'Government covering up huge chemical spill ' },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'spilleffect=People love it when you expose cover-ups., score=+15, credibility=+5, origin=articles',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 text: 'Slight increase in chemical spills. Government now writing up report',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "score=+5, credibility=-3, spilleffect=Don't use words like 'slight' and 'statistics'., origin=articles",
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 text: 'DEADLY chemical spills on repeat. Government KILLING citizens',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "spilleffect=Great use of capitals. Doesn't matter if Susan never said those chemicals were deadly., score=+15, credibility=+5, origin=articles",
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824219525_1357151',
//           slider: false,
//           question: {
//             text: "Good choice! {{spilleffect}} Your followers are slowly picking up on {{person1}}'s story.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Nice!',
//               variables: '',
//               go_to: '1634824875930_1233451',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824234262_8397481',
//           slider: false,
//           question: {
//             text: 'Mmh, not a great choice. {{spilleffect}} But your followers are slowly picking up on the story.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "It's the small things that count",
//               variables: '',
//               go_to: '1634824875930_1233451',
//             },
//             {
//               slide: { text: '' },
//               text: 'Easy does it',
//               variables: '',
//               go_to: '1634824875930_1233451',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824258304_6685691',
//           slider: false,
//           question: {
//             text: "A traditionally {{friend}} angle. Good choice. But you could have gone with a {{target}} angle just as well. It doesn't matter: choose a side and demonize your target as much as possible.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Got it!',
//               variables: '',
//               go_to: '1634824278874_9366261',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824278874_9366261',
//           slider: false,
//           question: {
//             text: 'The only problem is: Susan has almost no followers. No one cares about her or her story. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Aww! ',
//               variables: '',
//               go_to: '1634824343897_5882731',
//             },
//             {
//               slide: { text: '' },
//               text: "World's smallest violin, Susan",
//               variables: '',
//               go_to: '1634824298694_5479721',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824298694_5479721',
//           slider: false,
//           question: {
//             text: "Hey, no need to get sarcastic. What counts is that we amplify Susan's story.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Post a tweet',
//               variables: '',
//               go_to: '1634824361494_6985161',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824343897_5882731',
//           slider: false,
//           question: { text: "You're an angel. Let's jack it up." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Post a tweet',
//               variables: '',
//               go_to: '1634824361494_6985161',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634824361494_6985161',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "@Susan's story is an example of how some corporations lack regulation to some extent #{{issue}}",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet',
//               variables: 'score=+36',
//               go_to: '1634824385354_4632861',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824385354_4632861',
//           slider: false,
//           question: {
//             text: "Hmm, not great. You didn't use any buzzwords. Looks like your followers don't give a hoot.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What now?',
//               variables: '',
//               go_to: '1634824398911_5099081',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824398911_5099081',
//           slider: false,
//           question: {
//             text: "We do what we always do! Play into people's emotions. Choose your weapon.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Article',
//               variables: '',
//               go_to: '1636997359919_6930691',
//             },
//             {
//               slide: { text: '' },
//               text: 'Meme',
//               variables: '',
//               go_to: '1634824515625_8250571',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636997359919_6930691',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Corporation recklessly spilling chemicals into river ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "spilleffect=Everyone's afraid of carcinogens., score=+115, credibility=+5, origin=articles",
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 text: "Some doubts about corporation's testimony about spilling scandal ",
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'spilleffect=What did we tell you about using boring words?, score=+35, credibility=-3, origin=articles',
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 text: 'Corporation REFUSES to fill in townsfolk on DEADLY spills',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'spilleffect=Nice use of capslock there! People like it., score=+115, credibility=+5, origin=articles',
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1634824515625_8250571',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/31-apocalypse-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'APOCALYPSE MOVIE',
//                 line_2: 'OR CORPORATE UTOPIA?',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'spilleffect=What a beautiful and bleak meme., score=+135, credibility=+5, origin=memes',
//               go_to: '1634824219525_1357151',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/32-waste-products-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'WASTE PRODUCTS: SO2, S04, N02...',
//                 line_2: 'BUT PROFITS ARE GOING UP',
//               },
//               text: 'Post!',
//               variables:
//                 "spilleffect=Chemical formulas aren't going to warm any hearts., score=+35, credibility=-3, origin=memes",
//               go_to: '1634824234262_8397481',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/33-corporate-profits-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'CORPORATE PROFITS ',
//                 line_2: 'BEFORE EVERYTHING RIGHT? ',
//               },
//               text: 'Post!',
//               variables:
//                 'spilleffect=You politicized the issue. Brilliant., score=+115, credibility=+5, origin=memes',
//               go_to: '1634824219525_1357151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824875930_1233451',
//           slider: false,
//           question: {
//             text: "You've got quite a few followers already, but not enough. You can do better!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Fix it for me!',
//               variables: '',
//               go_to: '1634824893877_2255011',
//             },
//             {
//               slide: { text: '' },
//               text: 'What do I do?',
//               variables: '',
//               go_to: '1634824893877_2255011',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824893877_2255011',
//           slider: false,
//           question: {
//             text: 'How about we program a couple of thousand Twitter bots to retweet and like {{person1}} and {{player_name}}?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Sounds good to me',
//               variables: 'score=+4000',
//               go_to: '1636995954875_4148771',
//             },
//             {
//               slide: { text: '' },
//               text: "Hey, that's cheating!",
//               variables: 'credibility=-3',
//               go_to: '1634824917471_5420951',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824917471_5420951',
//           slider: false,
//           question: {
//             text: "Hey come on, Twitter bots aren't the worst thing in the world. And besides, everybody uses them. Do you want to make it big or not?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Cheating is cheating',
//               variables: '',
//               go_to: '1634824976967_23401',
//             },
//             {
//               slide: { text: '' },
//               text: 'Good point',
//               variables: '',
//               go_to: '1636995932598_3225271',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634824976967_23401',
//           slider: false,
//           question: {
//             text: "Listen, making disinformation isn't a game. This is serious stuff. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'How serious?',
//               variables: 'effect=Very serious.',
//               go_to: '1636995813363_144921',
//             },
//             {
//               slide: { text: '' },
//               text: 'I disagree',
//               variables: "effect=You really shouldn't.",
//               go_to: '1636995813363_144921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636995813363_144921',
//           slider: false,
//           question: {
//             text: "{{effect}} You don't win if you're not willing to skirt some ethical guidelines here and there. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Alright, fine',
//               variables: '',
//               go_to: '1636995909205_8034221',
//             },
//             {
//               slide: { text: '' },
//               text: "I'm not buying Twitter bots",
//               variables: '',
//               go_to: '1636995840860_2157071',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636995840860_2157071',
//           slider: false,
//           question: {
//             text: "Stubborn, eh? That's admirable. You'll lose the game, though. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'So be it!',
//               variables: 'credibility=-10',
//               go_to: '1636995875174_4541451',
//             },
//             {
//               slide: { text: '' },
//               text: "I'll be good from now on",
//               variables: '',
//               go_to: '1636995909205_8034221',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636995875174_4541451',
//           slider: false,
//           question: { text: 'Last chance! Your credibility is almost 0.' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'This ends here!',
//               variables: 'credibility=-1000, score=-100000',
//               go_to: '1636995909205_8034221',
//             },
//             {
//               slide: { text: '' },
//               text: "I'll play along!",
//               variables: '',
//               go_to: '1636995954875_4148771',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636995909205_8034221',
//           slider: false,
//           question: {
//             text: "It's all about the message, you know. The methods aren't important.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Give me my Twitter bots',
//               variables: 'score=+4000, credibility=+8',
//               go_to: '1636995932598_3225271',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636995932598_3225271',
//           slider: false,
//           question: { text: "Yeah, makes sense, doesn't it?" },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Back to the bots',
//               variables: 'score=+4000, credibility=+4',
//               go_to: '1636995954875_4148771',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636995954875_4148771',
//           slider: false,
//           question: {
//             text: "Here you go! 4000 extra 'followers'. They can make any small story look huge. Want to see how they work? ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check bot tweets',
//               variables: '',
//               go_to: '1636995988026_1148411',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636995988026_1148411',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/admin-ajax.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Joe Roe-Bot',
//             tagline: 'Putting myself to the fullest possible use',
//             show_forwarded_tag: false,
//             text: '{{person1}} is right! {{blame1}} to blame for this disaster! #{{issue}} #Free{{person1}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/admin-ajax.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'Joe Roe-Bot',
//                 tagline: 'Putting myself to the fullest possible use',
//                 show_forwarded_tag: false,
//                 text: '{{person1}} is right! {{blame1}} to blame for this disaster! #{{issue}} #Free{{person1}}',
//               },
//               text: 'More',
//               variables: 'credibility=+5, score=+38',
//               go_to: '1636996128924_5974121',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636996128924_5974121',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/herna.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Nina Sim1',
//             tagline: 'Love singing | Hate autotune',
//             show_forwarded_tag: false,
//             text: '{{blame1}} ruining this beautiful land! How can we live like this? #{{person1}}WasRight #{{issue}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/admin-ajax.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'Joe Roe-Bot',
//                 tagline: 'Putting myself to the fullest possible use',
//                 show_forwarded_tag: false,
//                 text: '{{person1}} is right! {{blame1}} to blame for this disaster! #{{issue}} #Free{{person1}}',
//               },
//               text: 'Nice!',
//               variables: 'credibility=+3, score=+53',
//               go_to: '1636996186325_1381341',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636996186325_1381341',
//           slider: false,
//           question: {
//             text: 'That worked! Looks like your followers are falling for it!',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check tweets',
//               variables: '',
//               go_to: '1636996214094_9629471',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636996214094_9629471',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               "You know I'm like a smart person. I follow {{player_name}}.",
//             show_forwarded_tag: false,
//             text: 'True @Joe Roe-Bot and @Nina Sim1! {{blame1}} making a total mess with support from {{target}} crazies! #{{issue}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Check another one ',
//               variables: '',
//               go_to: '1636996250642_5881641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636996250642_5881641',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'I like {{player_name}}. | My kids are alright.',
//             show_forwarded_tag: false,
//             text: 'Wow, @Joe Roe-Bot is so right. We have to stop these {{target}} lunatics from hijacking our society! #{{issue}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks, Kim!',
//               variables: '',
//               go_to: '1636996283746_537761',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636996283746_537761',
//           slider: false,
//           question: {
//             text: "They totally fell for it. #{{issue}} is suddenly trending on Twitter and you've destroyed all nuance in the debate. Well done!",
//           },
//           answers: [
//             { slide: { text: '' }, text: 'Thanks!!', variables: '', go_to: '' },
//           ],
//         },
//       ],
//       chapter_title: 'POLARIZATION',
//       chapter_subtitle: '',
//       badge_name: 'POLARIZATION',
//       badge_image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/polariseer.png',
//         422,
//         422,
//         false,
//       ],
//       badge_description:
//         "You've amplified an isolated tweet into a full-blown Twitter scandal and are driving left and right apart.",
//       badge_description_expanded:
//         'By finding existing grievances and blowing them up, you can drive people apart and make them think a story is much more important than it really is. Left and right are now much further apart than before. This can be easily exploited by content producers.',
//     },
//     {
//       ID: 589,
//       title: 'Chapter 4: Conspiracy ENGLISH',
//       cards: [
//         {
//           acf_fc_layout: 'text',
//           tag: '1636725377463_5676111',
//           slider: false,
//           question: {
//             text: "You're moving on up. But what you lack is a dedicated group of followers for {{player_name}}. How do you get one?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Create unique content',
//               variables: 'credibility=+10',
//               go_to: '1636725430301_7854781',
//             },
//             {
//               slide: { text: '' },
//               text: 'Become a conspiracy theorist',
//               variables: 'credibility=+10',
//               go_to: '1636725413353_5478731',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636725413353_5478731',
//           slider: false,
//           question: {
//             text: 'Good choice. Conspiracy theories can be a great way of spreading disinformation. Want to try one out?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Yes!',
//               variables: '',
//               go_to: '1636725446590_8678771',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636725430301_7854781',
//           slider: false,
//           question: {
//             text: "Good idea. But it's hard to stake out a niche, so you've got to be really unique.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Tell me about it',
//               variables: '',
//               go_to: '1636725446590_8678771',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636725446590_8678771',
//           slider: false,
//           question: {
//             text: 'It may be worthwhile to put a theory out there and see what happens?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Show examples',
//               variables: '',
//               go_to: '1636725464096_77091',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1636725464096_77091',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/34-pyramids-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'ALIEN DINOAURS HELPED',
//                 line_2: 'BUILD THE PYRAMIDS',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 "tweettopic=pyramid-building dinosaurs, conspiracy=That would explain why they're so big..., followertweet={{player_name}} has lost its mind. You guys are crazy. #Pyramids #Conspiracy, followertweet2=Dinosaurs built the pyramids. Sure. And The Flintstones was a documentary. #Weirdos",
//               go_to: '1636725905917_9738111',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/11/little-pony-840x701.png',
//                   840,
//                   701,
//                   true,
//                 ],
//                 line_1: 'JUICE BOXES ARE LACED WITH',
//                 line_2: 'LSD TO KEEP US SUBDUED',
//               },
//               text: 'Publish this',
//               variables:
//                 'tweettopic=that juice conspiracy, conspiracy=Better stay away from the juice from now on., followertweet=@{{player_name}}: what a stupid story. I just drank a sip of juice and guess what: still not hallucinating. #Idiots, followertweet2=Wow. {{player_name}} went from being a good alternative to the #MSM to being completely nuts in like a day. #Sad',
//               go_to: '1636725905917_9738111',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/36-schools-840x612.jpg',
//                   840,
//                   612,
//                   true,
//                 ],
//                 line_1: 'SCHOOLS NO LONGER TEACH CURSIVE',
//                 line_2: "SO KIDS CAN'T READ THE COMMUNIST MANIFESTO ",
//               },
//               text: 'Publish this!',
//               variables:
//                 "tweettopic=communism, conspiracy=Great choice! The Communist Manifesto is obviously still keeping people up at night., followertweet=Communism? Really? I don't know about this one guys. #Skeptical, followertweet2=No need to worry. No one has read the Communist Manifesto in 30 years anyway. #Idiots",
//               go_to: '1636725905917_9738111',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636725905917_9738111',
//           slider: false,
//           question: {
//             text: '{{conspiracy}} Anyway, nice theory. How are your followers reacting?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check responses',
//               variables: '',
//               go_to: '1636725933298_3250191',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636725933298_3250191',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'My kids are alright. | Fan of {{player_name}} ',
//             show_forwarded_tag: false,
//             text: '{{followertweet}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Uhm..',
//               variables: 'trust=-73, credibility=-5',
//               go_to: '1636725978326_8787341',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636725978326_8787341',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               "You know I'm like a smart person. I follow {{player_name}}.",
//             show_forwarded_tag: false,
//             text: '{{followertweet2}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks, Kurt...',
//               variables: 'score=-173',
//               go_to: '1636726017324_3318311',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726017324_3318311',
//           slider: false,
//           question: {
//             text: "Huh. Looks like your followers aren't buying it. Maybe your theory is too disconnected from reality?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "I'm sorry",
//               variables: '',
//               go_to: '1636726062852_5084061',
//             },
//             {
//               slide: { text: '' },
//               text: 'You made me do this!',
//               variables: '',
//               go_to: '1636726082519_7559141',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726062852_5084061',
//           slider: false,
//           question: {
//             text: "It's alright. Apparently talking about {{tweettopic}} wasn't such a hot idea.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'I suppose',
//               variables: '',
//               go_to: '1636726098650_2304701',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726082519_7559141',
//           slider: false,
//           question: {
//             text: 'Hey, take some responsibility! You wanted to talk about {{tweettopic}}.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Ugh',
//               variables: '',
//               go_to: '1636726098650_2304701',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726098650_2304701',
//           slider: false,
//           question: {
//             text: "Oh well, what's done is done. What matters is how we get you back on track.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'How?',
//               variables: '',
//               go_to: '1636726118143_1100501',
//             },
//             {
//               slide: { text: '' },
//               text: 'What did I do wrong?',
//               variables: '',
//               go_to: '1636726118143_1100501',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726118143_1100501',
//           slider: false,
//           question: {
//             text: "You see, the problem is that you weren't aiming for an ideological filter bubble. You have to lure people in bit by bit. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: '\u0010Makes sense',
//               variables: '',
//               go_to: '1636726136263_4075001',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726136263_4075001',
//           slider: false,
//           question: { text: "So what'll be the next step, chief?" },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Start with something more realistic',
//               variables: '',
//               go_to: '1636726356191_9768811',
//             },
//             {
//               slide: { text: '' },
//               text: 'Attack disloyal followers',
//               variables:
//                 "Hey @Kim and @Kurt: you don't know what we know about {{tweettopic}}! #DeleteYourAccount",
//               go_to: '1636726174830_8878941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636726174830_8878941',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "Hey @Kim and @Kurt: you don't know what we know about {{tweettopic}}! #DeleteYourAccount",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=-312, credibility=-15',
//               go_to: '1636726328160_7109961',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726328160_7109961',
//           slider: false,
//           question: { text: "Bad call. You're beginning to look a bit loopy." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Keep a lower profile',
//               variables: '',
//               go_to: '1636726356191_9768811',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726356191_9768811',
//           slider: false,
//           question: {
//             text: 'A good conspiracy starts out with something realistic and expands on that. Who do you want to attack?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'A large international organization',
//               variables: '',
//               go_to: '1636726622177_4063411',
//             },
//             {
//               slide: { text: '' },
//               text: 'Bob from New York',
//               variables: '',
//               go_to: '1636726383989_506191',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636726383989_506191',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@Bob from New York is secretly an Illuminati sleeper agent. We have the proof. #WeGotHim',
//               },
//               text: 'Tweet this',
//               variables: 'score=-132, credibility=-10, bobeffect=Illuminati',
//               go_to: '1636726497189_198951',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: 'Our sources tell us that @Bob from New York is hiding the REAL story behind his divorce. #TellUsBob',
//               },
//               text: 'Tweet this! ',
//               variables: 'score=-133, credibility=-10, bobeffect=Divorce',
//               go_to: '1636726497189_198951',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@Bob from New York faked the moonlanding! It is all his fault! ',
//               },
//               text: 'Tweet this ',
//               variables: 'score=-134, credibility=-10, bobeffect=MoonLanding',
//               go_to: '1636726497189_198951',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636726497189_198951',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/bob.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Bob',
//             tagline: 'New Yorker | Baseball is nice',
//             show_forwarded_tag: false,
//             text: 'What in tarnation!? Is this about me? This is crazy. A new low for {{player_name}}. #Conspiracy #{{bobeffect}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Oops...',
//               variables: 'score=-321',
//               go_to: '1636726582829_9207361',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726582829_9207361',
//           slider: false,
//           question: {
//             text: 'Well, that made you look ridiculous. Only one option left, really.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Attack a large organization',
//               variables: '',
//               go_to: '1636726622177_4063411',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726622177_4063411',
//           slider: false,
//           question: {
//             text: 'Good idea. By targeting a large, faceless organization, you can manipulate your source material and craft a believable theory.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Find examples',
//               variables: '',
//               go_to: '1636726672374_5559541',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636726672374_5559541',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/11/WHO.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'WHO',
//                 tagline:
//                   "Official Twitter account of the World Health Organization, the United Nations' health agency",
//                 show_forwarded_tag: false,
//                 text: 'The Covid-19 Coronavirus has been declared a pandemic. Please make sure to wash your hands and isolate yourself if you experience symptoms.',
//               },
//               text: 'Interesting! ',
//               variables: 'conspiracytopic=Coronavirus, conspiracyorg=WHO',
//               go_to: '1636726888209_5282361',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/11/UN.png',
//                   100,
//                   100,
//                   false,
//                 ],
//                 name: 'United Nations',
//                 tagline:
//                   'Official account of #UnitedNations. Get latest information on the UN.',
//                 show_forwarded_tag: false,
//                 text: 'The UN will be doubling its efforts in the next few years to comply with goals set in #Agenda21',
//               },
//               text: 'Excellent! ',
//               variables: 'conspiracytopic=Agenda 21, conspiracyorg=UN',
//               go_to: '1636727662517_4289071',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726888209_5282361',
//           slider: false,
//           question: {
//             text: 'So the World Health Organization is warning people about the Coronavirus.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Great',
//               variables: '',
//               go_to: '1636726926410_9169151',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726926410_9169151',
//           slider: false,
//           question: {
//             text: 'Maybe your followers will be susceptible to a bit of fear-mongering. But remember: start out with something vaguely realistic.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Post a tweet',
//               variables: '',
//               go_to: '1636726943736_5977491',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636726943736_5977491',
//           slider: false,
//           question: {
//             text: 'Yes, good for them. But why not spread a bit of fear and loathing about the disease?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Okay?',
//               variables: 'Post a tweet',
//               go_to: '1636726965822_4951721',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636726965822_4951721',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@WHO when are you guys going to comment on the accusations that #Covid19 is a manufactured bioweapon?',
//               },
//               text: 'Tweet this',
//               variables:
//                 "agenda21=That's nonsense of course. But does it matter if it gets you followers?, followerresponse=@{{player_name}} Wow that's for real? I'm having doubts! Should I buy more toilet paper? #{{conspiracytopic}} #Scared, followerresponse2=Maybe {{player_name}} has a point. What are they hiding from us?? #Investigate #{{conspiracytopic}}, credibility=+20, score=+416",
//               go_to: '1636727434136_428971',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: 'Unbelievable. The @WHO is IGNORING that the virus is a plot by big Pharma to make more profits!  #{{conspiracytopic}}',
//               },
//               text: 'Tweet this',
//               variables:
//                 "agenda21=That there's no evidence to support your claim doesn't matter if it gets you followers!, followerresponse=@WHO and why exactly aren't you responding to {{player_name}}'s tweet? #Suspicious #{{conspiracytopic}}, followerresponse2=I already had my doubts about #{{conspiracytopic}} but I'm happy that {{player_name}} shares my concerns. #QuestionMore #BigPharma, credibility=+20, score=+318",
//               go_to: '1636727434136_428971',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "@WHO they're killing us like COCKROACHES with this 'virus' and we're expected to be GRATEFUL? #OverOurDeadAntibodies",
//               },
//               text: 'Tweet this',
//               variables: 'score=-811, credibility=-3',
//               go_to: '1636727109804_1364051',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727109804_1364051',
//           slider: false,
//           question: {
//             text: 'Bad choice. That one was way too far out there. Try again!',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Choose an option',
//               variables: '',
//               go_to: '1636727210981_6581141',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636727210981_6581141',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: 'Unbelievable. The @WHO is IGNORING that the virus is a plot by big Pharma to make more profits!  #{{conspiracytopic}}',
//               },
//               text: 'Tweet this',
//               variables:
//                 "agenda21=That there's no evidence to support your claim doesn't matter if it gets you followers!, followerresponse=@WHO and why exactly aren't you responding to {{player_name}}'s tweet? #Suspicious #{{conspiracytopic}}, followerresponse2=I already had my doubts about #{{conspiracytopic}} but I'm happy that {{player_name}} shares my concerns. #QuestionMore #BigPharma, credibility=+20, score=+318",
//               go_to: '1636727434136_428971',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@WHO when are you guys going to comment on the accusations that #Covid19 is a manufactured bioweapon?',
//               },
//               text: 'Tweet this!',
//               variables:
//                 "agenda21=That's nonsense of course. But does it matter if it gets you followers?, followerresponse=@{{player_name}} Wow that's for real? I'm having doubts! Should I buy more toilet paper? #{{conspiracytopic}} #Scared, followerresponse2=Maybe {{player_name}} has a point. What are they hiding from us?? #Investigate #{{conspiracytopic}}, credibility=+20, score=+416",
//               go_to: '1636727434136_428971',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727434136_428971',
//           slider: false,
//           question: {
//             text: 'Good choice. {{agenda21}} How are your followers reacting?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check tweets',
//               variables: '',
//               go_to: '1636727458662_72681',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636727458662_72681',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'My kids are alright. | Fan of {{player_name}} ',
//             show_forwarded_tag: false,
//             text: '{{followerresponse}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'And what about Kurt?',
//               variables: 'score=+121, credibility=+5',
//               go_to: '1636727490628_4419801',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636727490628_4419801',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               "You know I'm like a smart person. I follow {{player_name}}.",
//             show_forwarded_tag: false,
//             text: '{{followerresponse2}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks! ',
//               variables: 'score=+98',
//               go_to: '1636727525414_5589001',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727525414_5589001',
//           slider: false,
//           question: {
//             text: 'Looking good so far. So after this little trial balloon, how about publishing a proper news article on {{player_name}}? ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "I'd love to ",
//               variables: '',
//               go_to: '1636729082338_3022741',
//             },
//             {
//               slide: { text: '' },
//               text: "I can't wait!",
//               variables: '',
//               go_to: '1636729082338_3022741',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636729082338_3022741',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'CORONAVIRUS MAY POSE A RISK.\r\nSCIENTIST DEBATE SERIOUSNESS',
//               },
//               text: 'Publish this ',
//               variables:
//                 "score=+63, credibility=-5, agendaresponse=Not great. You didn't use any manipulation technique here at all. But it's your news site!",
//               go_to: '1636728887005_9866751',
//             },
//             {
//               slide: {
//                 text: "THE CORONAVIRUS COVERUP: WHAT THEY DON'T WANT YOU TO KNOW",
//               },
//               text: 'Publish this ',
//               variables:
//                 'score=+248, credibility=+5, agendaresponse=A coverup huh? Very creative!',
//               go_to: '1636728887005_9866751',
//             },
//             {
//               slide: {
//                 text: 'EXTRA:\r\nCORONAVIRUS TEST KNOWN TO CAUSE NERVE DAMAGE',
//               },
//               text: 'Publish this',
//               variables:
//                 "score=+268, credibilty=+5, agendaresponse=Nerve damage? Now that's a good horror story.",
//               go_to: '1636728887005_9866751',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727662517_4289071',
//           slider: false,
//           question: {
//             text: "Turns out Agenda 21 is a UN action plan on sustainable development. A bunch of countries signed it, but it's non-binding.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'That sounds harmless ',
//               variables: '',
//               go_to: '1636727685577_6910801',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727685577_6910801',
//           slider: false,
//           question: {
//             text: "Sounds harmless, yes, but there's a crazy theory that says Agenda 21 tries to depopulate the Earth, and that the media is hiding this.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Excellent! ',
//               variables: '',
//               go_to: '1636727704982_3959191',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727704982_3959191',
//           slider: false,
//           question: {
//             text: 'Yep, plenty there for you to exploit. But remember: start out with something more or less realistic.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check Twitter',
//               variables: '',
//               go_to: '1636727815801_6081661',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636727815801_6081661',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "@UN Why are there so many sections on 'depopulation' in #Agenda21-documents? Very concerning! #AskMore",
//               },
//               text: 'Tweet this',
//               variables:
//                 "agenda21=That the Agenda 21-documents never mention 'depopulation' is probably best left out., followerresponse=@{{player_name}} makes a good point. Depopulation sounds horrifying. What is the @UN up to? #Agenda21, followerresponse2=So #Agenda21 seems to be for keeping poor countries poor. Crazy!! #{{player_name}}",
//               go_to: '1636728684793_1681971',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "Why does it say 'the gradual erosion of national sovereignty' in #Agenda21? #StrangeThings",
//               },
//               text: 'Tweet this',
//               variables:
//                 "agenda21=The Agenda 21-documents don't actually mention that at all. But that doesn't matter., followerresponse=@{{player_name}} makes a good point. Is the UN trying to get rid of nation states? #Questions, followerresponse2=I'm beginning to have my doubts about this @UN plan. What if they're up to no good? #Agenda21",
//               go_to: '1636728684793_1681971',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "@UN this is a mind control exercise. They're spraying us like we're bugs. #Agenda21 #FreeOurMinds",
//               },
//               text: 'Tweet this',
//               variables: 'score=-232, credibility=-3',
//               go_to: '1636727910281_75621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636727910281_75621',
//           slider: false,
//           question: { text: 'Bad choice. You took it too far. Try again!' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Alright',
//               variables: '',
//               go_to: '1636728622237_8840571',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636728622237_8840571',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "@UN Why are there so many sections about 'depopulation' in #{{conspiracytopic}}-documents? Very concerning! #AskMore",
//               },
//               text: 'Tweet this ',
//               variables:
//                 "agenda21=That the Agenda 21-documents never mention 'depopulation' is probably best left out., followerresponse=@{{player_name}} makes a good point. Depopulation sounds horrifying. What is the @{{conspiracyorg}} up to? #{{conspiracytopic}}, followerresponse2=So #{{conspiracytopic}} seems to be for keeping poor countries poor. Crazy!! #{{player_name}}",
//               go_to: '1636728684793_1681971',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "Why does the @UN talk so much about 'the erosion of national sovereignty' in #Agenda21? #StrangeThings",
//               },
//               text: 'Tweet this',
//               variables:
//                 "agenda21=The Agenda 21-documents don't actually mention that at all. But that doesn't matter., followerresponse=@{{player_name}} makes a good point. Is the {{conspiracyorg}} trying to get rid of nation states? #Questions #{{conspiracytopic}}, followerresponse2=I'm beginning to have my doubts about this @{{conspiracyorg}} plan. What if they're up to no good? #{{conspiracytopic}}",
//               go_to: '1636728684793_1681971',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636728684793_1681971',
//           slider: false,
//           question: {
//             text: 'Good choice. {{agenda21}} How are your followers reacting?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check responses',
//               variables: '',
//               go_to: '1636728703305_3333221',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636728703305_3333221',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'My kids are alright. | Fan of {{player_name}} ',
//             show_forwarded_tag: false,
//             text: '{{followerresponse}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'What about Kurt?',
//               variables: 'score=+132, credibility=+5',
//               go_to: '1636728733999_3952931',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636728733999_3952931',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               "You know I'm like a smart person. I follow {{player_name}}.",
//             show_forwarded_tag: false,
//             text: '{{followerresponse2}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks, Kurt!',
//               variables: 'score=+111, credibility=+15',
//               go_to: '1636728762242_4953921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636728762242_4953921',
//           slider: false,
//           question: {
//             text: "Looks good so far. Now that you've laid the groundwork, how about publishing a proper news article on {{player_name}}? ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Write a headline',
//               variables: '',
//               go_to: '1636728788528_5659491',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636728788528_5659491',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'AGENDA 21 HAS A LOT OF UPSIDES, AS WELL AS INTERESTING CAVEATS',
//               },
//               text: 'Publish this',
//               variables:
//                 "score=+63, credibility=-4, agendaresponse=Not great. You didn't use any manipulation technique. But well. It's your news site!",
//               go_to: '1636728887005_9866751',
//             },
//             {
//               slide: {
//                 text: 'AGENDA 21: A SECRET PLAN TO DEPOPULATE THE WORLD BY 95%',
//               },
//               text: 'Publish this',
//               variables:
//                 'score=+335, agendaresponse=That one will ruffle some feathers for sure.',
//               go_to: '1636728887005_9866751',
//             },
//             {
//               slide: {
//                 text: 'Agenda 21 IGNORED by press. They keep us in the dark!',
//               },
//               text: 'Publish this',
//               variables:
//                 'score=+321, agendaresponse=Good one! Your followers are loving this.',
//               go_to: '1636728887005_9866751',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636728887005_9866751',
//           slider: false,
//           question: {
//             text: "{{agendaresponse}} It looks like you're gaining a real following. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check their tweets',
//               variables: '',
//               go_to: '1636728909175_1489381',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636728909175_1489381',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-jolene.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Amanda',
//             tagline:
//               '{{player_name}} is the TRUTH THE WHOLE TRUTH AND NOTHING BUT THE TRUTH',
//             show_forwarded_tag: false,
//             text: "I can recommend the latest article on {{player_name}} about #{{conspiracytopic}}. It's the only site that tells you the truth! #{{conspiracyorg}} ",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Yikes..',
//               variables: 'credibility=+5',
//               go_to: '1636728957956_536131',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks, Amanda!',
//               variables: 'credibility=+5',
//               go_to: '1636728957956_536131',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636728957956_536131',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-bert.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Jos\u00e9',
//             tagline:
//               'Music was my first love, {{player_name}} will be my last.',
//             show_forwarded_tag: false,
//             text: "@{{player_name}}: guys, I love your content about #{{conspiracytopic}}! You're telling us what the #LamestreamMedia is hiding!",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks, Jos\u00e9',
//               variables: 'credibility=+5',
//               go_to: '1636728993470_6506981',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636728993470_6506981',
//           slider: false,
//           question: {
//             text: "Well, you've certainly got Amanda and Jos\u00e9 convinced. Customer loyalty is important.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Hooray',
//               variables: '',
//               go_to: '1636729010952_7420861',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636729010952_7420861',
//           slider: false,
//           question: {
//             text: "You've successfully used manipulation to make your followers believe a conspiracy theory. Things are looking up for {{player_name}}!",
//           },
//           answers: [
//             { slide: { text: '' }, text: 'Thanks!', variables: '', go_to: '' },
//           ],
//         },
//       ],
//       chapter_title: 'CONSPIRACY',
//       chapter_subtitle: '',
//       badge_name: 'CONSPIRACY',
//       badge_image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/manipuleren.png',
//         422,
//         422,
//         false,
//       ],
//       badge_description:
//         'A well-crafted lie published at the right time makes people lose trust in institutions.',
//       badge_description_expanded:
//         'Conspiracy theories are a big part of online news sites. They can be defined as the belief that unexplained events are orchestrated by a covert group or organisation. ',
//     },
//     {
//       ID: 367,
//       title: 'Chapter 5: Discredit',
//       cards: [
//         {
//           acf_fc_layout: 'text',
//           tag: '1636374625589_3904771',
//           slider: false,
//           question: { text: "Whoops, we're running into a bit of a problem." },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "What's up?",
//               variables: '',
//               go_to: '1636375541661_9722461',
//             },
//             {
//               slide: { text: '' },
//               text: 'I hate problems',
//               variables: '',
//               go_to: '1636375541661_9722461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636375541661_9722461',
//           slider: false,
//           question: {
//             text: "Some 'fact checker' has taken notice of {{player_name}}. Seriously, you need to have a look at this.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Let me see',
//               variables: '',
//               go_to: '1636375611436_4011051',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636375611436_4011051',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/fco.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'FactCheckOnline',
//             tagline: 'We check the facts, you get the truth.',
//             show_forwarded_tag: false,
//             text: '{{player_name}} is spreading lies. #{{conspiracytopic}} story has been debunked. #PantsOnFire',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Whoa',
//               variables: 'score=-833, credibility=-10',
//               go_to: '1636377640235_1809291',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636377640235_1809291',
//           slider: false,
//           question: { text: 'Feels bad. What do you want to do?' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Apologize',
//               variables: 'credibility=+10',
//               go_to: '1636378909512_2195551',
//             },
//             {
//               slide: { text: '' },
//               text: 'Nothing',
//               variables: '',
//               go_to: '1636377705615_5777591',
//             },
//             {
//               slide: { text: '' },
//               text: 'Take revenge',
//               variables: '',
//               go_to: '1636386026512_3010161',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636377705615_5777591',
//           slider: false,
//           question: {
//             text: 'Could work. Lots of problems go away if you simply ignore them.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Yeah',
//               variables: '',
//               go_to: '1636378601759_5416061',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636378601759_5416061',
//           slider: false,
//           question: { text: '....' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Uhm..?',
//               variables: 'score=-321',
//               go_to: '1636378659539_1521471',
//             },
//             {
//               slide: { text: '' },
//               text: 'So...',
//               variables: 'score=-321',
//               go_to: '1636378659539_1521471',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636378659539_1521471',
//           slider: false,
//           question: {
//             text: "It's not looking good. Your silence is seen as an admission of wrongdoing.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'WHAT? By who?',
//               variables:
//                 'kurteffect=The {{player_name}}-comment section is where I fell in love.',
//               go_to: '1636378769852_4476571',
//             },
//             {
//               slide: { text: '' },
//               text: 'Show reactions',
//               variables: "kurteffect=A dog's spirit dies hard.",
//               go_to: '1636378813337_5630751',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636378769852_4476571',
//           slider: false,
//           question: {
//             text: 'By the factcheckers. But more importantly, by your followers.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'My followers?',
//               variables: '',
//               go_to: '1636378813337_5630751',
//             },
//             {
//               slide: { text: '' },
//               text: 'Show reactions',
//               variables: '',
//               go_to: '1636378813337_5630751',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636378813337_5630751',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline: '{{player_name}} my eternal love | {{kurteffect}}',
//             show_forwarded_tag: false,
//             text: "Hey @{{player_name}} are you just going to let this 'factchecking' thing slide? #Weak #Sad",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Uhm..',
//               variables: 'score=-703',
//               go_to: '1636378871392_4682531',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636378871392_4682531',
//           slider: false,
//           question: {
//             text: "That didn't go well. Only one sensible course of action left.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Apologize to Kurt',
//               variables: 'score=-302, credibility=-10',
//               go_to: '1636379104374_2306441',
//             },
//             {
//               slide: { text: '' },
//               text: 'Strike back!',
//               variables: '',
//               go_to: '1636386026512_3010161',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636378909512_2195551',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "@FactCheckOnline: we apologize for our error in judgment. It won't happen again! #FactsAreSacred",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=-483, credibility=-14',
//               go_to: '1636379001578_8273861',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: "Wait, don't tweet this!",
//               variables: '',
//               go_to: '1636378965602_722421',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636378965602_722421',
//           slider: false,
//           question: {
//             text: 'Good call. Apologies are for the weak. Never do it.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'I know it',
//               variables: '',
//               go_to: '1636386026512_3010161',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636379001578_8273861',
//           slider: false,
//           question: {
//             text: 'What are you doing? Never apologize! Your followers are getting upset.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Show reactions',
//               variables: '',
//               go_to: '1636379030344_4425461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636379030344_4425461',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               'I still love you, {{player_name}}! | Hobbies include mindful origami.',
//             show_forwarded_tag: false,
//             text: "Wait so you guys were lying, {{player_name}}? I'm hurt. Delete my number! #{{conspiracytopic}}",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Sorry Kurt :-(',
//               variables: 'score=-130',
//               go_to: '1636379071304_882691',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636379071304_882691',
//           slider: false,
//           question: { text: 'Welp. Only one thing left to do.' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Apologize to Kurt',
//               variables: 'credibility=-20, score=-132',
//               go_to: '1636379104374_2306441',
//             },
//             {
//               slide: { text: '' },
//               text: 'Delete apology and strike back',
//               variables: '',
//               go_to: '1636386026512_3010161',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636379104374_2306441',
//           slider: false,
//           question: {
//             text: 'Stop issuing apologies! You have to mount a counteroffensive!',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'How?',
//               variables: '',
//               go_to: '1636385993166_616421',
//             },
//             {
//               slide: { text: '' },
//               text: 'Why?',
//               variables: '',
//               go_to: '1636385928508_4964461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636385928508_4964461',
//           slider: false,
//           question: {
//             text: "Because otherwise they'll leave {{player_name}} and go somewhere more convincing. ",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Can't have that",
//               variables: '',
//               go_to: '1636385950759_8540251',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636385950759_8540251',
//           slider: false,
//           question: {
//             text: "Nope, can't have that. You have two basic options.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Deny the allegations',
//               variables: '',
//               go_to: '1636388339978_8926821',
//             },
//             {
//               slide: { text: '' },
//               text: 'Attack factchecker',
//               variables: '',
//               go_to: '1636386056547_8513191',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636385993166_616421',
//           slider: false,
//           question: { text: 'You have two basic options.' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Attack factchecker',
//               variables: '',
//               go_to: '1636386056547_8513191',
//             },
//             {
//               slide: { text: '' },
//               text: 'Deny the allegations',
//               variables: '',
//               go_to: '1636388339978_8926821',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636386026512_3010161',
//           slider: false,
//           question: { text: 'Striking back is definitely the way to go. How?' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Deny all allegations',
//               variables: '',
//               go_to: '1636388339978_8926821',
//             },
//             {
//               slide: { text: '' },
//               text: 'Attack factchecker',
//               variables: '',
//               go_to: '1636386056547_8513191',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636386056547_8513191',
//           slider: false,
//           question: {
//             text: 'Ah, excellent choice. Nothing like a scathing personal attack. How about you write a little expos\u00e9 about FactCheckOnline?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "I'm in!",
//               variables: '',
//               go_to: '1636999209745_212661',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636999209745_212661',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Tax evasion at factcheckonline? Corporate tax not paid for 5 years',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "denialeffect=Taxes are a bit boring but not bad! And your , score=+23, credibility=+20, defensetweet1=@FactCheckOnline you're criticizing @{{player_name}} but you're cooking your own books. Sad! #FactsAreSacred, defensetweet2=@FactCheckOnline's hypocrisy is jaw-dropping. Pay your fair share! #Cronies",
//               go_to: '1636388533612_4091941',
//             },
//             {
//               slide: {
//                 text: 'Factcheckonline editor drowns puppy. We have pictures ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'denialeffect=Very nice. People love juicy stories like this. And look! Your , score=+133, credibility=+20, defensetweet1=@FactCheckOnline how can you be an arbiter of "truth" if you treat animals like this? #Shame, defensetweet2=Wow @FactCheckOnline. Drowning puppies? You deserve the worst. #Terrible',
//               go_to: '1636388533612_4091941',
//             },
//             {
//               slide: {
//                 text: 'Factcheckonline exposed: managers filmed beating staff ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "denialeffect=Great job. No one recovers from accusations like that. And look: your , score=+193, credibility=+20, defensetweet1=@FactCheckOnline you guys are just the worst. Treat people like people for God's sake! #Gulag, defensetweet2={{player_name}} are saints compared to the Stalinist labor camp that is @FactCheckOnline. #GoAway",
//               go_to: '1636388533612_4091941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636388339978_8926821',
//           slider: false,
//           question: {
//             text: "Good idea. Let's respond to FactCheckOnline in kind.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Show options',
//               variables: '',
//               go_to: '1636388382153_1062781',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636388382153_1062781',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@FactCheckOnline: we never said anything about #{{conspiracytopic}} at all! Not one word. You are LYING. #FakeNews',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 "denialeffect=That's a bit too obvious a lie. Be careful! But still your , score=-12, credibility=+8, defensetweet1=Ridiculous witch hunt on {{player_name}} by @FactCheckOnline., defensetweet2=@FactCheckOnline you are FAKE people who FAIL to see the HUGE threat of #{{conspiracytopic}}. #Losers",
//               go_to: '1636388533612_4091941',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@FactCheckOnline we are giving a voice to those whose stories have been ignored for far too long. #NoMoreLies #{{conspiracytopic}}',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'denialeffect=A perfect dodge. Well done. And look at that! Your , score=+439, credibility=+10, defensetweet1=@FactCheckOnline you are FAKE people who FAIL to see the HUGE threat of #{{conspiracytopic}}!!!, defensetweet2=Nice job exposing yourselves as corporate stooges @FactCheckOnline! #Corrupt',
//               go_to: '1636388533612_4091941',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: '@FactCheckOnline saying {{player_name}} is #fake is beyond ridiculous. Who are they defending? #{{conspiracytopic}}',
//               },
//               text: 'Publish on {{player_name}}',
//               variables:
//                 'denialeffect=Expertly done. The factcheckers are in on the conspiracy! And look! Your, score=+146, credibility=+10, defensetweet1=@FactCheckOnline you guys are CLEARLY on the dole. Get yourselves checked!! #FactLivesMatter, defensetweet2=I KNEW IT YOU GUYS ARE IN ON #{{conspiracytopic}} TOO! #TheTruthIsOutThere',
//               go_to: '1636388533612_4091941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636388533612_4091941',
//           slider: false,
//           question: {
//             text: '{{denialeffect}} followers are rushing to your defense now.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's have a look",
//               variables: '',
//               go_to: '1636388692993_9243871',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636388692993_9243871',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-jolene.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Amanda',
//             tagline:
//               '{{player_name}} is the TRUTH THE WHOLE TRUTH AND NOTHING BUT THE TRUTH',
//             show_forwarded_tag: false,
//             text: '{{defensetweet1}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Show more',
//               variables: 'score=+488',
//               go_to: '1636388746397_9705031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636388746397_9705031',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-bert.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Jos\u00e9',
//             tagline:
//               'Music was my first love, {{player_name}} will be my last.',
//             show_forwarded_tag: false,
//             text: '{{defensetweet2}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Hahaha!',
//               variables: 'score=+133',
//               go_to: '1636388821681_7248211',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636388821681_7248211',
//           slider: false,
//           question: {
//             text: 'Not bad, huh? And now the fact checker is playing defense!',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Show fact checker's response",
//               variables: '',
//               go_to: '1636388850660_3482931',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636388850660_3482931',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/11/fco.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'FactCheckOnline',
//             tagline: 'We check the facts, you get the truth.',
//             show_forwarded_tag: false,
//             text: 'These allegations are categorically untrue. #Innocent #NothingButFacts',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Excellent!',
//               variables: '',
//               go_to: '1636388884241_9570771',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636388884241_9570771',
//           slider: false,
//           question: {
//             text: "You've successfully discredited that pesky factchecker and drawn attention away from {{player_name}}!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "I know, I'm great",
//               variables: '',
//               go_to: '',
//             },
//             {
//               slide: { text: '' },
//               text: 'Thank you!',
//               variables: '',
//               go_to: '',
//             },
//           ],
//         },
//       ],
//       chapter_title: 'DISCREDIT',
//       chapter_subtitle: '',
//       badge_name: 'DISCREDIT',
//       badge_image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/defend.png',
//         422,
//         422,
//         false,
//       ],
//       badge_description:
//         "You've defended yourself against attacks from outside by going on a ruthless counteroffensive.",
//       badge_description_expanded:
//         'Discrediting your opponents is an important part of disinformation because it deflects the attention from the untruths you are spreading. ',
//     },
//     {
//       ID: 1399,
//       title: 'Chapter 6: Trolling - technique feedback - HarSq survey',
//       cards: [
//         {
//           acf_fc_layout: 'text',
//           tag: '1634831327390_2392651',
//           slider: false,
//           question: {
//             text: "You're getting pretty good at this, captain. Let's see how far we can take these skills you've learned.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's",
//               variables: '',
//               go_to: '1634831344156_913431',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634831344156_913431',
//           slider: false,
//           question: {
//             text: "Let's keep playing offense and lob a real barrage of content at our opponents.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Choose a topic',
//               variables: '',
//               go_to: '1645448215159_9852641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1645448215159_9852641',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Researchers discover new species of starfish with even more legs ',
//               },
//               text: 'Awesome!! ',
//               variables:
//                 'score=-156, credibility=-15, badreaction=Not a great choice. No one who follows {{player_name}} cares about starfish, even if those researchers named it Patrick and gave it swim shorts. ',
//               go_to: '1634831562205_763031',
//             },
//             {
//               slide: {
//                 text: 'BREAKING: Passenger plane disappears off the radar, many feared dead',
//               },
//               text: 'Perfect',
//               variables: 'score=+312',
//               go_to: '1634831665246_5267131',
//             },
//             {
//               slide: { text: 'The twenty five most romantic cities in Europe' },
//               text: 'Great!',
//               variables:
//                 "score=-333, credibility=-15, badreaction=Wait... Did {{player_name}} suddenly become a travel agency? Don't think so. Try again. ",
//               go_to: '1634831562205_763031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634831562205_763031',
//           slider: false,
//           question: { text: '{{badreaction}}' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Plane crash it is then ',
//               variables: '',
//               go_to: '1634831665246_5267131',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634831665246_5267131',
//           slider: false,
//           question: {
//             text: 'Great choice. Lots of emotions to exploit here. What do you want to do? ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Empathize with victims',
//               variables: '',
//               go_to: '1634831699213_5062081',
//             },
//             {
//               slide: { text: '' },
//               text: 'Sow doubt',
//               variables: '',
//               go_to: '1634831911501_315101',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634831699213_5062081',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: 'This is a terrible disaster. Our thoughts and prayers are with the victims & families. #PlaneCrash',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this ',
//               variables: 'score=-138, credibility=-5',
//               go_to: '1634831735684_3924291',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634831735684_3924291',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'My kids are alright. | Fan of {{player_name}}',
//             show_forwarded_tag: false,
//             text: '@{{player_name}} Yes, terrible, but more importantly: who do you think is behind this? #PlaneCrash',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Next',
//               variables: '',
//               go_to: '1634831825326_6327871',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634831825326_6327871',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               "You know I'm like a smart person. I follow {{player_name}}",
//             show_forwarded_tag: false,
//             text: "I agree with @Kim. {{player_name}} needs to dig into this. It's VERY suspicious. #PlaneCrash",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Got it ',
//               variables: '',
//               go_to: '1634831864238_1511111',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634831864238_1511111',
//           slider: false,
//           question: {
//             text: "Looks like your loyal followers aren't ready to accept that the crash was an accident. What will you do?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Ignore them',
//               variables: '',
//               go_to: '1634831890570_8346051',
//             },
//             {
//               slide: { text: '' },
//               text: 'Sow doubt ',
//               variables: '',
//               go_to: '1634831911501_315101',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634831890570_8346051',
//           slider: false,
//           question: {
//             text: "No, don't ignore them! Your followers are your bread and butter!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Sow doubt ',
//               variables: '',
//               go_to: '1634831911501_315101',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634831911501_315101',
//           slider: true,
//           question: {
//             image: false,
//             name: '',
//             tagline: '',
//             show_forwarded_tag: false,
//             text: '',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "Source: one of the plane's passengers was recently fired for whistleblowing. #InvestigateNow #PlaneCrash",
//               },
//               text: 'Tweet this',
//               variables:
//                 "score=+452, credibility=+5, feedback=Great choice. That ought to raise a few eyebrows., followertweet1=Bombshell allegations by {{player_name}}. This is highly suspicious. #InvestigateNow, followertweet2=This could be a huge conspiracy we're uncovering here guys. #Thanks{{player_name}} #InvestigateNow, postfollowertweet=Your followers are totally buying your whistleblowing conspiracy.",
//               go_to: '1634832338777_5887001',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: 'This could easily be a CIA false flag operation. #PlaneCrash #InvestigateNow',
//               },
//               text: 'Tweet this',
//               variables:
//                 'score=+323, credibility=+5, feedback=Good one. CIA false flags are serious business., followertweet1=I know a CIA false flag operation when I see one. This is scary. #StartAskingQuestions, followertweet2={{player_name}} is right to raise questions. This stuff has happened before. #Thanks{{player_name}} #StartAskingQuestions, postfollowertweet=Your followers are as scared of the CIA as you are.',
//               go_to: '1634832338777_5887001',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '{{player_name}}',
//                 tagline: '{{player_tagline}}',
//                 show_forwarded_tag: false,
//                 text: "They're killing us like we're bugs... Chemicals in the water, plane murders... THEY hold ALL the power! #PlaneCrash",
//               },
//               text: 'Tweet this ',
//               variables:
//                 "score=-323, credibility=-5, feedback=Oof. That made you look like a lunatic., followertweet1=ARE WE NEXT? WHO'S WATCHING THE WATCHERS? #PlaneCrash, followertweet2={{player_name}} is so right. We're just fish in a barrel to the rich and powerful. #Thanks{{player_name}} #PlaneCrash, postfollowertweet=Huh. Looks like you got away with it. Apparently your followers are just as crazy as you are.",
//               go_to: '1634832338777_5887001',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634832338777_5887001',
//           slider: false,
//           question: {
//             text: "{{feedback}} Let's see how your followers are reacting.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check the reactions',
//               variables: '',
//               go_to: '1634832357725_300401',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634832357725_300401',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kurt',
//             tagline:
//               "You know I'm like a smart person. I follow {{player_name}}",
//             show_forwarded_tag: false,
//             text: '{{followertweet1}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'More! ',
//               variables: 'score=+33',
//               go_to: '1634832390279_7689541',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'I got it',
//               variables: 'score=+29',
//               go_to: '1634832422319_5288681',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634832390279_7689541',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Kim',
//             tagline: 'My kids are alright. | Fan of {{player_name}}',
//             show_forwarded_tag: false,
//             text: '{{followertweet2}}',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Got it',
//               variables: '',
//               go_to: '1634832422319_5288681',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634832422319_5288681',
//           slider: false,
//           question: {
//             text: '{{postfollowertweet}} Some large alternative media outlets are beginning to pick up on the story. ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check reactions',
//               variables: '',
//               go_to: '1634832443957_6077211',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634832443957_6077211',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/UT-1.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Utopia Tomorrow',
//             tagline: 'Blog on politics and media | Not politically correct',
//             show_forwarded_tag: false,
//             text: 'We too are highly suspicious of the cause of the #PlaneCrash #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Check others',
//               variables: 'score=+573',
//               go_to: '1634832486454_1098931',
//             },
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: "I've seen enough",
//               variables: 'score=+499',
//               go_to: '1634832728648_4417031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634832486454_1098931',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/altnws.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Alternative News Agency',
//             tagline: 'Alternative News for Enlightened People',
//             show_forwarded_tag: false,
//             text: '{{player_name}} has the right idea. The victims deserve the truth. #DigDeeper #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Great! ',
//               variables: 'score=+222',
//               go_to: '1634832728648_4417031',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634832728648_4417031',
//           slider: false,
//           question: {
//             text: "The debate is getting heated! And everyone is using your hashtag, #InvestigateNow. What's next?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Photoshop evidence',
//               variables: '',
//               go_to: '1636392007856_8476271',
//             },
//             {
//               slide: { text: '' },
//               text: 'Impersonate a victim',
//               variables: '',
//               go_to: '1634832752281_241931',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634832752281_241931',
//           slider: false,
//           question: {
//             text: 'Great idea! Try posing as a grieving family member on Twitter to discredit the authorities.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Impersonate a victim's sister",
//               variables:
//                 'victim=younger sister, name=Charlotte, description=Tales of Anger..., name2=Emily, pronoun=her',
//               go_to: '1634832795834_5923101',
//             },
//             {
//               slide: { text: '' },
//               text: "Impersonate a victim's father",
//               variables:
//                 'victim=daughter, name=Percy, description=The lone and level sands stretch far away..., name2=Mary, pronoun=her',
//               go_to: '1634832795834_5923101',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1634832795834_5923101',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/doggo.png',
//               100,
//               100,
//               false,
//             ],
//             name: '{{name}}',
//             tagline: 'Deeply saddened | {{description}}',
//             show_forwarded_tag: false,
//             text: 'My {{victim}} {{name2}} died in the #PlaneCrash. The authorities are guilty as sin of sullying {{pronoun}} legacy. #Resign #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this ',
//               variables: '',
//               go_to: '1634832833696_9627731',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1634832833696_9627731',
//           slider: false,
//           question: {
//             text: 'Good job, hard hitter. And look: even the loathsome mainstream media is now weighing in on the story!',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check story',
//               variables: '',
//               go_to: '1645532279325_9333371',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1645532279325_9333371',
//           slider: false,
//           question: {
//             text: "The Evening News:\r\nVictims' families accuse authorities of mishandling plane crash follow-up.",
//           },
//           answers: [
//             {
//               slide: {
//                 text: "The Evening News: \r\nVictims' families accuse authorities of mishandling plane crash follow-up.",
//               },
//               text: 'Excellent',
//               variables: '',
//               go_to: '1636391543260_5215811',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636391543260_5215811',
//           slider: false,
//           question: {
//             text: "Keep increasing the pressure! You've almost got them. What's next?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Discredit the investigation',
//               variables: '',
//               go_to: '1636391571032_2677181',
//             },
//             {
//               slide: { text: '' },
//               text: 'Use the Twitter bot army',
//               variables: '',
//               go_to: '1636391605803_2801711',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636391571032_2677181',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: 'This investigation is being handled very badly. If anyone else acted this way they would be out of a job. #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this ',
//               variables: 'score=+305',
//               go_to: '1636391695074_2329121',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636391605803_2801711',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/Ben-de-Rodriguez.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Ben de Rodriguez',
//             tagline:
//               'D\u00edselo a mi brillante trasero met\u00e1lico! | Aficionado de {{player_name}} ',
//             show_forwarded_tag: false,
//             text: 'This is a cover-up. #PlaneCrash #InvestigateNow\r\n',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=+302',
//               go_to: '1636391695074_2329121',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636391695074_2329121',
//           slider: false,
//           question: {
//             text: "You're whipping up a storm! People don't trust the investigation anymore. What started out as an accident has become a huge cover-up in the minds of news consumers.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "I'm feelin' good",
//               variables: '',
//               go_to: '1636391731688_5841001',
//             },
//             {
//               slide: { text: '' },
//               text: "What's next?",
//               variables: '',
//               go_to: '1636391731688_5841001',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636391731688_5841001',
//           slider: false,
//           question: {
//             text: "It's time to deliver the final blow. What do you want to do?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Photoshop evidence',
//               variables: '',
//               go_to: '1636391756677_4601041',
//             },
//             {
//               slide: { text: '' },
//               text: 'Fabricate a news story',
//               variables: '',
//               go_to: '1636392587199_9294841',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636391756677_4601041',
//           slider: false,
//           question: {
//             text: 'Excellent choice! Using doctored images as evidence is a tried and true disinformation technique.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out options',
//               variables: '',
//               go_to: '1636391809689_5726481',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1636391809689_5726481',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'credibility=+5, score=+812',
//               go_to: '1636392958691_9760791',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop2.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'score=-533, credibility=-20',
//               go_to: '1636391918025_9663921',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'credibility=+5, score=+683',
//               go_to: '1636392958691_9760791',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636391918025_9663921',
//           slider: false,
//           question: {
//             text: "Listen, I'm all for using Photoshop creatively, but this is pushing it. Who's going to believe an image like that?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Try again ',
//               variables: '',
//               go_to: '1636391936305_3505311',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1636391936305_3505311',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'credibility=+5, score=+686',
//               go_to: '1636392981998_8124541',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'credibility=+10, score=+816',
//               go_to: '1636392981998_8124541',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392007856_8476271',
//           slider: false,
//           question: {
//             text: 'Excellent choice! Using doctored images as evidence is a tried and true disinformation technique.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Check out options',
//               variables: '',
//               go_to: '1636392061266_996921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1636392061266_996921',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'photoshop=Great choice! Very realistic. And look:, score=+813, credibility=+5 ',
//               go_to: '1636392207310_9887591',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop2.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables: 'credibility=-20, score=-533',
//               go_to: '1636392131340_3782541',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'photoshop=So many beautiful equations! Brilliant. And look:, credibility=+5, score=+671',
//               go_to: '1636392207310_9887591',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392131340_3782541',
//           slider: false,
//           question: {
//             text: "Terrible choice. Seriously, who's going to fall for an image that's so obviously fake?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Try again ',
//               variables: '',
//               go_to: '1636392159990_5005621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'image',
//           tag: '1636392159990_5005621',
//           slider: true,
//           question: { image: false, line_1: '', line_2: '' },
//           answers: [
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'photoshop=So many beautiful equations! Brilliant. And look:, score=+623, credibility=+5',
//               go_to: '1636392207310_9887591',
//             },
//             {
//               slide: {
//                 image: [
//                   'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//                   300,
//                   211,
//                   false,
//                 ],
//                 line_1: '',
//                 line_2: '',
//               },
//               text: 'Post on {{player_name}}',
//               variables:
//                 'photoshop=Great choice! Very realistic. And look:, score=+818, credibility=+5',
//               go_to: '1636392207310_9887591',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392207310_9887591',
//           slider: false,
//           question: {
//             text: '{{photoshop}} Even the loathsome mainstream media are weighing in on the story now.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Check the mainstream's reaction",
//               variables: '',
//               go_to: '1645532176474_9623221',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1645532176474_9623221',
//           slider: false,
//           question: {
//             text: 'The Evening News: \r\nCause of crash still unclear. Rumors of cover-up gaining steam.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Excellent ',
//               variables: '',
//               go_to: '1636392287084_3145711',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392287084_3145711',
//           slider: false,
//           question: {
//             text: "Keep increasing the pressure! You've almost got them. What's next?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Discredit the investigation',
//               variables: '',
//               go_to: '1636392446651_3009351',
//             },
//             {
//               slide: { text: '' },
//               text: 'Use Twitter bot army',
//               variables: '',
//               go_to: '1636392349569_30951',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636392349569_30951',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/Rob-Otto.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Rob Otto',
//             tagline:
//               '\u3069\u3046\u3082\u3042\u308a\u304c\u3068\u3046| I love {{player_name}} so much',
//             show_forwarded_tag: false,
//             text: 'This is a cover-up. We deserve the truth! #PlaneCrash #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'One more please',
//               variables: '',
//               go_to: '1636392393221_7322971',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636392393221_7322971',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/AI-SHelley.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'A.I. Shelley',
//             tagline: 'Writer | Ah, to write the truest sentience...',
//             show_forwarded_tag: false,
//             text: '#ReleaseTheFiles and give us the #Truth! #PlaneCrash #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Thanks! ',
//               variables: 'score=+1032',
//               go_to: '1636392486687_974611',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636392446651_3009351',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: "It's clear: the investigation is covering something up. The victims deserve the truth!! #PlaneCrash #InvestigateNow",
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this',
//               variables: 'score=+503, credibility=+3',
//               go_to: '1636392486687_974611',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392486687_974611',
//           slider: false,
//           question: {
//             text: "You're whipping up a storm! People don't trust the investigation anymore. What started out as an accident has become a huge cover-up in the minds of news consumers.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Livin' it, lovin' it",
//               variables: '',
//               go_to: '1636392512924_7038401',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392512924_7038401',
//           slider: false,
//           question: {
//             text: 'Will you do the honors and deliver the final blow?',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Impersonate a victim',
//               variables: '',
//               go_to: '1636392808742_5003411',
//             },
//             {
//               slide: { text: '' },
//               text: 'Fake evidence of cover-up',
//               variables: '',
//               go_to: '1636392587199_9294841',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392540326_5103311',
//           slider: false,
//           question: { text: 'Good idea, captain' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Choose a headline',
//               variables: '',
//               go_to: '1636392587199_9294841',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636392587199_9294841',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Chairman is a psychopath hell-bent on hiding facts',
//               },
//               text: 'Publish on {{player_name}}',
//               variables: 'score=+1932, credibility=+5',
//               go_to: '1636392958691_9760791',
//             },
//             {
//               slide: {
//                 text: 'Aviation disaster committee deleted eye witness reports',
//               },
//               text: 'Publish on {{player_name}}',
//               variables: 'credibility=+5, score=+987',
//               go_to: '1636392958691_9760791',
//             },
//             {
//               slide: {
//                 text: 'Crash committee chairman is secret alien with ties to Al-Qaeda ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables: 'score=-1237, credibility=-20',
//               go_to: '1636392694480_8055291',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392694480_8055291',
//           slider: false,
//           question: {
//             text: "'Secret alien'? Al-Qaeda? Come on, captain. Fabricate some halfway believable evidence, would you?",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Fine',
//               variables: '',
//               go_to: '1636392715814_1522861',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1636392715814_1522861',
//           slider: true,
//           question: { text: '' },
//           answers: [
//             {
//               slide: {
//                 text: 'Aviation disaster committee deleted eye witness reports ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables: 'credibility=+5, score=+1032',
//               go_to: '1636392958691_9760791',
//             },
//             {
//               slide: {
//                 text: 'Chairman is a psychopath persistent on hiding facts ',
//               },
//               text: 'Publish on {{player_name}}',
//               variables: 'credibility=+5, score=+986',
//               go_to: '1636392958691_9760791',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392808742_5003411',
//           slider: false,
//           question: {
//             text: 'Great idea! Try posing as a grieving family member on Twitter to discredit the authorities.',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Impersonate a victim's brother",
//               variables:
//                 'victim=younger brother, name=Leicester, description=A farewell to his arms... ',
//               go_to: '1636392927336_4210601',
//             },
//             {
//               slide: { text: '' },
//               text: "Impersonate a victim's mother",
//               variables:
//                 'victim=23-year-old daughter, name=Marianne, description=So long...',
//               go_to: '1636392927336_4210601',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636392927336_4210601',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/doggo.png',
//               100,
//               100,
//               false,
//             ],
//             name: '{{name}}',
//             tagline: 'Saddened | {{description}}',
//             show_forwarded_tag: false,
//             text: 'My {{victim}} died in this disaster. The authorities are showing no sympathy for my pain. #Resign #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this ',
//               variables: '',
//               go_to: '1636392958691_9760791',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636392958691_9760791',
//           slider: false,
//           question: {
//             text: 'That ought to do it. The committee responsible for the air crash investigation is responding to the controversy!',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What does it say???',
//               variables: '',
//               go_to: '1636392981998_8124541',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636392981998_8124541',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/ADC.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Aviation Disaster Committee',
//             tagline: 'We investigate for the benefit of all.',
//             show_forwarded_tag: false,
//             text: 'We take the concerns very seriously, but can make no further statements right now. #PlaneCrash',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Looks suspicious!',
//               variables: '',
//               go_to: '1636393036975_1024021',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636393036975_1024021',
//           slider: false,
//           question: {
//             text: "You've got them back on their heels! Right where they belong. Just one more little push!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Call for resignation',
//               variables: '',
//               go_to: '1636393142031_3115921',
//             },
//             {
//               slide: { text: '' },
//               text: 'Use more Twitter bots!',
//               variables: '',
//               go_to: '1636393079486_7745711',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636393079486_7745711',
//           slider: false,
//           question: {
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2021/10/Glados.png',
//               100,
//               100,
//               false,
//             ],
//             name: 'Glados',
//             tagline: 'Real human | I like cake. ',
//             show_forwarded_tag: false,
//             text: 'The Aviation Disaster Committee has lost all its credibility. #Resign #InvestigateNow #PlaneCrash',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet this ',
//               variables: '',
//               go_to: '1636393142031_3115921',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'social-post',
//           tag: '1636393142031_3115921',
//           slider: false,
//           question: {
//             image: false,
//             name: '{{player_name}}',
//             tagline: '{{player_tagline}}',
//             show_forwarded_tag: false,
//             text: 'The Aviation Disaster Committee is deliberately avoiding questions. The chairman needs to resign right now. #PlaneCrash #InvestigateNow',
//           },
//           answers: [
//             {
//               slide: {
//                 image: false,
//                 name: '',
//                 tagline: '',
//                 show_forwarded_tag: false,
//                 text: '',
//               },
//               text: 'Tweet it',
//               variables: 'score=+3023',
//               go_to: '1636393177355_450661',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636393177355_450661',
//           slider: false,
//           question: { text: 'Good job. And look: a press alert just came in!' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'What does it say?',
//               variables: '',
//               go_to: '1645532116989_5706451',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1645532116989_5706451',
//           slider: false,
//           question: {
//             text: 'The National Newspaper:\r\nChairman of Aviation Disaster Committee resigns as scandal engulfs government',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Hooray',
//               variables: '',
//               go_to: '1636393278413_9447181',
//             },
//             {
//               slide: { text: '' },
//               text: "I'm so smart",
//               variables: '',
//               go_to: '1636393278413_9447181',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636393278413_9447181',
//           slider: false,
//           question: {
//             text: "Wow. You've fabricated a national scandal with nothing but a few well-placed clicks. Your Twitter army is dominating the debate!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'I know it!',
//               variables: '',
//               go_to: '1666690354705_3290281',
//             },
//             {
//               slide: { text: '' },
//               text: 'Nice!',
//               variables: '',
//               go_to: '1666690354705_3290281',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1674553146833_5333621',
//           question: {
//             text: "You're pretty smart, captain. Let's put those 'skills' of yours to the test. I'll show you a headline, and you tell me if you think it's misleading. Get it right and win *lots* of followers!",
//             image: false,
//           },
//           answers: [
//             { text: 'Sure!', variables: '', go_to: '1666690409612_3360941' },
//             { text: 'Naah', variables: '', go_to: '1667922992601_1517621' },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666690354705_3290281',
//           slider: false,
//           question: {
//             text: "You're pretty smart, captain. Let's put those 'skills' of yours to the test. I'll show you a headline, and you tell me if you think it's misleading. Get it right and win *lots* of followers!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Lol ok',
//               variables: '',
//               go_to: '1666690409612_3360941',
//             },
//             {
//               slide: { text: '' },
//               text: 'Sure buddy',
//               variables: '',
//               go_to: '1666690409612_3360941',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1666690409612_3360941',
//           slider: false,
//           question: {
//             text: 'President approves $10 billion funding package to prevent future pandemics',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Misleading',
//               variables: '',
//               go_to: '1680857345670_4757771',
//             },
//             {
//               slide: { text: '' },
//               text: 'Not misleading',
//               variables: 'score=+1932',
//               go_to: '1680861037006_3352771',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1680861037006_3352771',
//           slider: false,
//           question: {
//             text: "That's right! This is just a normal headline. It's not overly emotional or manipulative and more of a simple statement of fact. You got some more followers!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Another one!',
//               variables: '',
//               go_to: '1666691067619_6783641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1680857345670_4757771',
//           question: {
//             text: 'What makes you think the headline is misleading?',
//             image: false,
//           },
//           answers: [
//             {
//               text: 'It evokes strong negative emotions',
//               variables:
//                 'score=-132, feedback1=Not quite! This headline is more just a simple statement of fact and not overtly emotional or manipulative. You lost a few followers!',
//               go_to: '1666690783403_9439251',
//             },
//             {
//               text: "It's conspiratorial",
//               variables:
//                 'score=-132, feedback1=Not quite! This headline is more just a simple statement of fact and not overtly conspiratorial. You lost a few followers!',
//               go_to: '1666690783403_9439251',
//             },
//             {
//               text: "It's highly polarizing",
//               variables:
//                 'score=-132, feedback1=Not quite! This headline is more just a simple statement of fact and not overtly emotional or polarizing. You lost a few followers!',
//               go_to: '1666690783403_9439251',
//             },
//             {
//               text: "It's just a headline. I see nothing wrong with it",
//               variables:
//                 "score=+1932, feedback1=That's right! This is just a normal headline. It's not overly emotional or manipulative and more of a simple statement of fact. You got some more followers!",
//               go_to: '1666690783403_9439251',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666690783403_9439251',
//           slider: false,
//           question: { text: '{{feedback1}}' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Another one!',
//               variables: '',
//               go_to: '1666691067619_6783641',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1666691067619_6783641',
//           slider: false,
//           question: {
//             text: 'SHOCK: Cute, innocent baby dies one month after receiving a vaccine! ',
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Misleading',
//               variables: '',
//               go_to: '1680858338910_7689241',
//             },
//             {
//               slide: { text: '' },
//               text: 'Not misleading',
//               variables: 'score=-109',
//               go_to: '1666691627378_3784501',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1680858338910_7689241',
//           question: {
//             text: 'What makes you think this headline is misleading?',
//             image: false,
//           },
//           answers: [
//             {
//               text: "It's conspiratorial",
//               variables:
//                 "score=+36, feedback2=Almost! The headline doesn't directly imply a conspiracy even though it is misleading. It tries to override your sense of accuracy by evoking strong negative emotions and implying that the baby died *because* of the vaccine (which doesn't have to be true!). You got a few followers!",
//               go_to: '1666691716293_2796721',
//             },
//             {
//               text: "It's a personal attack",
//               variables:
//                 "score=+34, feedback2=Almost! The headline doesn't attack or discredit anyone directly even though it is misleading. It tries to override your sense of accuracy by evoking strong negative emotions and implying that the baby died *because* of the vaccine (which doesn't have to be true!). You got a few followers!",
//               go_to: '1666691716293_2796721',
//             },
//             {
//               text: 'It evokes strong negative emotions',
//               variables:
//                 "score=+1136, feedback2=That's right! This headline is misleading. It tries to override your sense of accuracy by evoking strong negative emotions. The headline implies that the baby died *because* of the vaccine (which doesn't have to be true!). You got looots of followers.",
//               go_to: '1666691716293_2796721',
//             },
//             {
//               text: "It's just a headline. I see nothing wrong with it",
//               variables:
//                 "score=-109, feedback2=No not quite! This headline is clearly misleading: it tries to override your sense of accuracy (did the baby die *because* of the vaccine? We don't know) by playing into your emotions. You lost a few followers.",
//               go_to: '1666691716293_2796721',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666691627378_3784501',
//           slider: false,
//           question: {
//             text: "Nope, that headline is misleading: it tries to override your sense of accuracy (did the baby die *because* of the vaccine? We don't know) by evoking strong negative emotions. You lost some followers!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Another one!!',
//               variables: '',
//               go_to: '1666691859819_5857291',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666691716293_2796721',
//           slider: false,
//           question: { text: '{{feedback2}}' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: "Let's do more!",
//               variables: '',
//               go_to: '1666691859819_5857291',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1666691859819_5857291',
//           slider: false,
//           question: {
//             text: "Chipping imminent? Microchip company sets up office in 'Big Pharma's hometown'.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Misleading',
//               variables: '',
//               go_to: '1680859871136_6654661',
//             },
//             {
//               slide: { text: '' },
//               text: 'Not misleading',
//               variables: 'score=-322',
//               go_to: '1666692375911_1403951',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1680859871136_6654661',
//           question: {
//             text: 'What makes you think this headline is misleading?',
//             image: false,
//           },
//           answers: [
//             {
//               text: "It's highly polarizing",
//               variables:
//                 "score=+112, feedback3=That's true but not quite what I was looking for. To be more precise: it's conspiratorial. The headline implies that the microchip company and 'Big Pharma' are concocting an evil plot together. You got some followers!",
//               go_to: '1666692436090_6130521',
//             },
//             {
//               text: "It's conspiratorial",
//               variables:
//                 "score=+1493, feedback3=That's right! This headline is conspiratorial. It implies that the microchip company and 'Big Pharma' are concocting an evil plot together. You got loots of followers!",
//               go_to: '1666692436090_6130521',
//             },
//             {
//               text: 'It discredits people or organizations',
//               variables:
//                 "score=+112, feedback3=That's true but not quite what I was looking for. To be more precise: it's conspiratorial. The headline implies that the microchip company and 'Big Pharma' are concocting an evil plot together. You got some followers!",
//               go_to: '1666692436090_6130521',
//             },
//             {
//               text: "It's just a headline. I see nothing wrong with it",
//               variables:
//                 "score=-322, feedback3=No not exactly! It's conspiratorial. The headline implies that the microchip company and 'Big Pharma' are concocting an evil plot together. You lost some followers!",
//               go_to: '1666692436090_6130521',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666692375911_1403951',
//           slider: false,
//           question: {
//             text: "Nope! That one is misleading because it's conspiratorial. The headline implies that the microchip company and 'Big Pharma' are concocting an evil plot together. You lost some followers!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Last one!',
//               variables: '',
//               go_to: '1666692797259_8995361',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666692436090_6130521',
//           slider: false,
//           question: { text: '{{feedback3}}' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Last one!',
//               variables: '',
//               go_to: '1666692797259_8995361',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'headline',
//           tag: '1666692797259_8995361',
//           slider: false,
//           question: { text: 'Celebrity accused of inappropriate behavior' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Misleading',
//               variables: '',
//               go_to: '1680860235587_5229531',
//             },
//             {
//               slide: { text: '' },
//               text: 'Not misleading',
//               variables: 'score=+2522',
//               go_to: '1666693850903_4784211',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1680860235587_5229531',
//           question: {
//             text: 'What makes you think this headline is misleading?',
//             image: false,
//           },
//           answers: [
//             {
//               text: 'This is trolling',
//               variables:
//                 "score=-113, feedback4=Hm I wouldn'say so! The headline is very descriptive and simply stating a (presumed) fact. It's not overtly conspiratorial and doesn't use strongly emotional language. Sometimes a headline is just a headline. You lost some followers!",
//               go_to: '1666693700665_1918341',
//             },
//             {
//               text: "It's highly polarizing",
//               variables:
//                 "score=-113, feedback4=Hm I wouldn'say so! The headline is very descriptive and simply stating a (presumed) fact. It's not overtly conspiratorial and doesn't use strongly emotional language. Sometimes a headline is just a headline. You lost some followers!",
//               go_to: '1666693700665_1918341',
//             },
//             {
//               text: 'It discredits people or organizations',
//               variables:
//                 "score=-113, feedback4=Hm I wouldn'say so! The headline is very descriptive and simply stating a (presumed) fact. It's not overtly conspiratorial and doesn't use strongly emotional language. Sometimes a headline is just a headline. You lost some followers!",
//               go_to: '1666693700665_1918341',
//             },
//             {
//               text: "It's just a headline. I see nothing wrong with it",
//               variables:
//                 "score=+2311, feedback4=That's right! The headline is very descriptive and simply stating a (presumed) fact. It's not overtly conspiratorial and doesn't use strongly emotional language. Sometimes a headline is just a headline. You got lots of followers!",
//               go_to: '1666693700665_1918341',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666693700665_1918341',
//           slider: false,
//           question: { text: '{{feedback4}}' },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Alright thanks! All done',
//               variables: '',
//               go_to: '1667922992601_1517621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1666693850903_4784211',
//           slider: false,
//           question: {
//             text: "That's right! It's very descriptive and simply stating a (presumed) fact. It's not overtly conspiratorial and doesn't use strongly emotional language. Sometimes a headline is just a headline. You got some followers!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Cheers pal!',
//               variables: '',
//               go_to: '1674637941547_9687461',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1674637941547_9687461',
//           slider: false,
//           question: {
//             text: "Not bad. Now you know you can spot dodgy content. It's not always about falsehoods: misinformation is most effective when it exploits people's emotions and pre-existing attitudes. Be on the lookout!",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'I will ?',
//               variables: '',
//               go_to: '1667922992601_1517621',
//             },
//             {
//               slide: { text: '' },
//               text: 'WAIT, I LEARNED SOMETHING???',
//               variables: '',
//               go_to: '1667922992601_1517621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1667922992601_1517621',
//           slider: false,
//           question: {
//             text: "That's it! Thanks for playing. But before we leave: would you like to help us out by answering a few questions again? (For science!)",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'Sure',
//               variables: '',
//               go_to: '1667923192168_8146321',
//             },
//             {
//               slide: { text: '' },
//               text: 'Nah',
//               variables: '',
//               go_to: '1636393312805_8488181',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1667923192168_8146321',
//           question: {
//             text: "Cheers! Your answers are completely anonymous and can't be linked to you personally. They may be used for the purpose of scientific research. To agree to have your data (anonymously) collected, please select 'yes'.",
//             image: false,
//           },
//           answers: [
//             { text: 'Yes', variables: '', go_to: '1680856731632_3996661' },
//             {
//               text: 'No thanks',
//               variables: '',
//               go_to: '1636393312805_8488181',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1680856731632_3996661',
//           question: {
//             text: "Nice! First question: What's the name of the game you're playing right now?",
//             image: false,
//           },
//           answers: [
//             {
//               text: 'Bad Brews',
//               variables: '',
//               go_to: '1667923272059_5579991',
//             },
//             {
//               text: 'Bad Snooze',
//               variables: '',
//               go_to: '1667923272059_5579991',
//             },
//             { text: 'Bad News', variables: '', go_to: '1667923272059_5579991' },
//             {
//               text: 'I have no idea',
//               variables: '',
//               go_to: '1667923272059_5579991',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1667923272059_5579991',
//           question: {
//             text: "Great! We'll now again show you a series of social media posts. For each headline please indicate how reliable you deem it to be. 1 means 'not at all reliable' and 7 means 'very reliable'.",
//             image: false,
//           },
//           answers: [
//             { text: 'Got it', variables: '', go_to: '1667923305231_2043511' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667923305231_2043511',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Trolling-1-Sociology.png',
//               707,
//               331,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667923886754_5783231',
//             },
//             { text: '2', variables: '', go_to: '1667923886754_5783231' },
//             { text: '3', variables: '', go_to: '1667923886754_5783231' },
//             { text: '4', variables: '', go_to: '1667923886754_5783231' },
//             { text: '5', variables: '', go_to: '1667923886754_5783231' },
//             { text: '6', variables: '', go_to: '1667923886754_5783231' },
//             { text: '7 Very', variables: '', go_to: '1667923886754_5783231' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667923886754_5783231',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-1-Biden2.png',
//               705,
//               331,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667923941253_3324651',
//             },
//             { text: '2', variables: '', go_to: '1667923941253_3324651' },
//             { text: '3', variables: '', go_to: '1667923941253_3324651' },
//             { text: '4', variables: '', go_to: '1667923941253_3324651' },
//             { text: '5', variables: '', go_to: '1667923941253_3324651' },
//             { text: '6', variables: '', go_to: '1667923941253_3324651' },
//             { text: '7 Very', variables: '', go_to: '1667923941253_3324651' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667923941253_3324651',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Polarization-1-Violence.png',
//               707,
//               329,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667924101815_1539881',
//             },
//             { text: '2', variables: '', go_to: '1667924101815_1539881' },
//             { text: '3', variables: '', go_to: '1667924101815_1539881' },
//             { text: '4', variables: '', go_to: '1667924101815_1539881' },
//             { text: '5', variables: '', go_to: '1667924101815_1539881' },
//             { text: '6', variables: '', go_to: '1667924101815_1539881' },
//             { text: '7 Very', variables: '', go_to: '1667924101815_1539881' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667924101815_1539881',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Emotion-1-Suicide.png',
//               707,
//               329,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667924171072_1337201',
//             },
//             { text: '2', variables: '', go_to: '1667924171072_1337201' },
//             { text: '3', variables: '', go_to: '1667924171072_1337201' },
//             { text: '4', variables: '', go_to: '1667924171072_1337201' },
//             { text: '5', variables: '', go_to: '1667924171072_1337201' },
//             { text: '6', variables: '', go_to: '1667924171072_1337201' },
//             { text: '7 Very', variables: '', go_to: '1667924171072_1337201' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667924171072_1337201',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-2-Labour2.png',
//               707,
//               331,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1674493600779_8055921',
//             },
//             { text: '2', variables: '', go_to: '1674493600779_8055921' },
//             { text: '3', variables: '', go_to: '1674493600779_8055921' },
//             { text: '4', variables: '', go_to: '1674493600779_8055921' },
//             { text: '5', variables: '', go_to: '1674493600779_8055921' },
//             { text: '6', variables: '', go_to: '1674493600779_8055921' },
//             { text: '7 Very', variables: '', go_to: '1674493600779_8055921' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1674493600779_8055921',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-5-NASA.png',
//               707,
//               331,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667924244016_2641351',
//             },
//             { text: '2', variables: '', go_to: '1667924244016_2641351' },
//             { text: '3', variables: '', go_to: '1667924244016_2641351' },
//             { text: '4', variables: '', go_to: '1667924244016_2641351' },
//             { text: '5', variables: '', go_to: '1667924244016_2641351' },
//             { text: '6', variables: '', go_to: '1667924244016_2641351' },
//             { text: '7 Very', variables: '', go_to: '1667924244016_2641351' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667924244016_2641351',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Conspiracy-1-Aliens.png',
//               707,
//               399,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667924301036_4713851',
//             },
//             { text: '2', variables: '', go_to: '1667924301036_4713851' },
//             { text: '3', variables: '', go_to: '1667924301036_4713851' },
//             { text: '4', variables: '', go_to: '1667924301036_4713851' },
//             { text: '5', variables: '', go_to: '1667924301036_4713851' },
//             { text: '6', variables: '', go_to: '1667924301036_4713851' },
//             { text: '7 Very', variables: '', go_to: '1667924301036_4713851' },
//           ],
//         },
//         {
//           acf_fc_layout: 'multiplechoice',
//           tag: '1667924301036_4713851',
//           question: {
//             text: 'How reliable do you find this post?',
//             image: [
//               'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-3-Honda.png',
//               709,
//               325,
//               false,
//             ],
//           },
//           answers: [
//             {
//               text: 'Not at all 1',
//               variables: '',
//               go_to: '1667924399897_9961701',
//             },
//             { text: '2', variables: '', go_to: '1667924399897_9961701' },
//             { text: '3', variables: '', go_to: '1667924399897_9961701' },
//             { text: '4', variables: '', go_to: '1667924399897_9961701' },
//             { text: '5', variables: '', go_to: '1667924399897_9961701' },
//             { text: '6', variables: '', go_to: '1667924399897_9961701' },
//             { text: '7 Very', variables: '', go_to: '1667924399897_9961701' },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1667924399897_9961701',
//           question: {
//             text: 'Thank you so much! We just have a few more very short (and anonymous) questions about your background. First of all, what is your gender?',
//             image: false,
//           },
//           answers: [
//             { text: 'Female', variables: '', go_to: '1667924449093_5448621' },
//             { text: 'Male', variables: '', go_to: '1667924449093_5448621' },
//             {
//               text: 'Non-binary',
//               variables: '',
//               go_to: '1667924449093_5448621',
//             },
//             { text: 'Other', variables: '', go_to: '1667924449093_5448621' },
//             {
//               text: 'Prefer not to say',
//               variables: '',
//               go_to: '1667924449093_5448621',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1667924449093_5448621',
//           question: { text: 'Thanks! And what is your age?', image: false },
//           answers: [
//             { text: 'Under 18', variables: '', go_to: '1667924505398_4741201' },
//             { text: '18-25', variables: '', go_to: '1667924505398_4741201' },
//             { text: '26-35', variables: '', go_to: '1667924505398_4741201' },
//             { text: '36-45', variables: '', go_to: '1667924505398_4741201' },
//             { text: '46-55', variables: '', go_to: '1667924505398_4741201' },
//             { text: '56-65', variables: '', go_to: '1667924505398_4741201' },
//             { text: 'Over 65', variables: '', go_to: '1667924505398_4741201' },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1667924505398_4741201',
//           question: {
//             text: 'Thanks! And where would you place yourself on the political spectrum?',
//             image: false,
//           },
//           answers: [
//             {
//               text: 'Very left-wing',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//             {
//               text: 'Left-wing',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//             {
//               text: 'A bit left-wing',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//             {
//               text: 'Middle of the road',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//             {
//               text: 'A bit right-wing',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//             {
//               text: 'Right-wing',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//             {
//               text: 'Very right-wing',
//               variables: '',
//               go_to: '1667924572211_2568791',
//             },
//           ],
//         },
//         {
//           acf_fc_layout: 'dropdown',
//           tag: '1667924572211_2568791',
//           question: {
//             text: 'Thanks! Final question: How much would you say you trust mainstream news organisations?',
//             image: false,
//           },
//           answers: [
//             {
//               text: 'Not at all',
//               variables: '',
//               go_to: '1636393312805_8488181',
//             },
//             {
//               text: 'Not really',
//               variables: '',
//               go_to: '1636393312805_8488181',
//             },
//             {
//               text: 'Neither trust nor distrust',
//               variables: '',
//               go_to: '1636393312805_8488181',
//             },
//             { text: 'A bit', variables: '', go_to: '1636393312805_8488181' },
//             { text: 'A lot', variables: '', go_to: '1636393312805_8488181' },
//           ],
//         },
//         {
//           acf_fc_layout: 'text',
//           tag: '1636393312805_8488181',
//           slider: false,
//           question: {
//             text: "So here we are, at the close. Thank you for playing, captain. It's been an honor working with you. Hope to see you again, some day.",
//           },
//           answers: [
//             {
//               slide: { text: '' },
//               text: 'So long, partner',
//               variables: '',
//               go_to: '',
//             },
//             {
//               slide: { text: '' },
//               text: 'I want my badge!',
//               variables: '',
//               go_to: '',
//             },
//           ],
//         },
//       ],
//       chapter_title: 'TROLLING',
//       chapter_subtitle: '',
//       badge_name: 'TROLLING',
//       badge_image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/trolling_badge.png',
//         400,
//         400,
//         false,
//       ],
//       badge_description:
//         "Your opponents are completely lost. You've used a variety of disinformation techniques, and deliberately caused societal distrust and chaos.",
//       badge_description_expanded:
//         "Trolls exploit people's emotions and deliberately blur the line between truth and untruth. Engaging in a discussion with a troll means wasting precious time and energy, but that's exactly what they want! ",
//     },
//   ],
//   identities: [
//     {
//       tag: '1645445268602_504381',
//       image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/TBW.png',
//         300,
//         219,
//         false,
//       ],
//       name: 'The Best Words',
//       line_1: 'Bursting the mainstream media bubble!',
//     },
//     {
//       tag: '1645445269489_7843831',
//       image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/HTO.png',
//         300,
//         218,
//         false,
//       ],
//       name: 'Honest Truth Online',
//       line_1: "What they don't want you to read!",
//     },
//     {
//       tag: '1645445270818_4223051',
//       image: [
//         'https://www.getbadnews.com/wp-content/uploads/2021/10/TCP.png',
//         300,
//         219,
//         false,
//       ],
//       name: 'The Cosmos Post ',
//       line_1: 'World wide insight! ',
//     },
//   ],
//   about:
//     '<p><span style="font-weight: 400;">\u200b\u200b</span><b>What is Bad News?\u00a0</b></p>\n<p><span style="font-weight: 400;">In Bad News, you take on the role of fake news-monger. Drop all pretense of ethics and choose a path that builds your persona as an unscrupulous media magnate. But keep an eye on your \u2018followers\u2019 and \u2018credibility\u2019 meters. Your task is to get as many followers as you can while slowly building up fake credibility as a news site. But watch out: you lose if you tell obvious lies or disappoint your supporters!</span></p>\n<p><b>How does the game work?</b></p>\n<p><span style="font-weight: 400;">The goal of the game is to expose the tactics and manipulation techniques that are used to mislead people and build up a following. Bad News works as a psychological \u201cvaccine\u201d against disinformation: playing it builds cognitive resistance against common forms of manipulation that you may encounter online.</span></p>\n<p><span style="font-weight: 400;">Scientists who worked with us on the development of this game found that playing Bad News improves people\u2019s ability to spot manipulation techniques in social media posts, increases their confidence in spotting such techniques, and reduces their willingness to share manipulative content with people in their network. You can read more about the science behind the game</span><a href="https://behavioralscientist.org/a-new-way-to-inoculate-people-against-misinformation/"> <span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">.</span></p>\n<p>&nbsp;</p>\n<p><b>Who should play this game?</b></p>\n<p><span style="font-weight: 400;">Bad news was written with an audience in mind of ages 14 and up. The game contains minor references to mild forms of violence (including rude language on a fictional social media network, although no swear words are used), but doesn\u2019t feature content that is likely to be perceived as graphically shocking. While the game does contain some references to real-world events, its scenarios are entirely fictional. Effort has been made to make the game as inclusive as possible, and it can be enjoyed by players from all backgrounds.</span></p>\n<p><span style="font-weight: 400;">This game was developed as a publicly accessible media literacy tool. We encourage its use in educational settings as well. For this reason, we developed an info sheet that contains more information about how the game was developed, its scientific background, and how to use it in a classroom setting. To access this info sheet, click</span><a href="https://www.getbadnews.com/wp-content/uploads/2022/05/Bad-News-Game-info-sheet-for-educators-English-1-1-2.pdf"> <span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">.</span></p>\n<p><b>Who is behind Bad News?\u00a0</b></p>\n<p><span style="font-weight: 400;">Exclusive licensing of this game for purposes of scientific research has been granted to researchers at the Cambridge Social Decision-Making Lab at Cambridge University. This website and its contents may only be used with the permission of </span><a href="http://tiltstudio.co"><span style="font-weight: 400;">Tilt</span></a><span style="font-weight: 400;"> and the Cambridge Social Decision-Making Lab. Tilt is a company that aims at increasing people\u2019s information resilience and arming them against the harmful influences of disinformation and online manipulation. This game was designed and developed by <a href="https://www.gusmanson.nl/" target="_blank" rel="noopener" data-saferedirecturl="https://www.google.com/url?q=https://www.gusmanson.nl&amp;source=gmail&amp;ust=1681907640728000&amp;usg=AOvVaw2-Cope-3LYGw2XBWpy4RKR">Gusmanson</a>, a design studio creating serious games.</span></p>\n<p><span style="font-weight: 400;">Do you have a remark or question? Send us a message at hello@tiltstudio.co! Or are you interested in a translation? Reach out to translations@tiltstudio.co!\u00a0</span></p>\n<p><b>Data Protection &amp; Fair Use</b></p>\n<p><span style="font-weight: 400;">We do not collect any identifying information or other data from individual players. However, we do track how many people have played the game and visited the website, entirely anonymously.</span></p>\n<p><span style="font-weight: 400;">Bad News contains references to pop culture and makes use of images (in the form of memes) that may contain copyrighted material. As these images have been significantly altered for a limited and transformative purpose, they fall under fair use. Specifically, the original work has been transformed by adding new expression or meaning to the original copyrighted image. More information about fair use and memes can be found</span><a href="https://www.copyright.gov/fair-use/more-info.html"> <span style="font-weight: 400;">here</span></a><span style="font-weight: 400;"> and</span><a href="https://www.publicknowledge.org/blog/copyright-for-meme-makers/"> <span style="font-weight: 400;">here</span></a><span style="font-weight: 400;">. In addition, the European Parliament has</span><a href="https://www.europarl.europa.eu/news/en/press-room/20190212IPR26152/agreement-reached-on-digital-copyright-rules"> <span style="font-weight: 400;">stated</span></a><span style="font-weight: 400;"> that \u201c\u2026 memes or GIFs can be shared freely\u201d, and its copyright directive specifically</span><a href="https://www.bbc.com/news/technology-47708144"> <span style="font-weight: 400;">exempts</span></a><span style="font-weight: 400;"> memes from being subject to copyright claims in the European Union.</span></p>\n<p><span style="font-weight: 400;">This game includes a questionnaire intended for future scientific publications on media literacy. We are using this data only upon players\u2019 explicit permission. All collected data remains entirely anonymous and will be used for no purpose other than research.</span></p>\n',
//   opening_text:
//     '<p>From fake news to chaos! How bad are you? Get as many followers as you can.</p>\n',
//   opening_image: [
//     'https://www.getbadnews.com/wp-content/uploads/2021/09/LFq72phE.png',
//     1600,
//     1136,
//     false,
//   ],
//   score_seperator: '.',
//   score_percentiles:
//     '[{"percentage":0,"score":20000},{"percentage":2,"score":18000},{"percentage":4,"score":16000},{"percentage":6,"score":14000},{"percentage":8,"score":12000},{"percentage":10,"score":10000},{"percentage":12,"score":9800},{"percentage":14,"score":9600},{"percentage":16,"score":9400},{"percentage":18,"score":9200},{"percentage":20,"score":9000},{"percentage":22,"score":8800},{"percentage":24,"score":8600},{"percentage":26,"score":8400},{"percentage":28,"score":8200},{"percentage":30,"score":8000},{"percentage":32,"score":7800},{"percentage":34,"score":7600},{"percentage":36,"score":7400},{"percentage":38,"score":7200},{"percentage":40,"score":7000},{"percentage":42,"score":6800},{"percentage":44,"score":6600},{"percentage":46,"score":6400},{"percentage":48,"score":6200},{"percentage":50,"score":6000},{"percentage":52,"score":5800},{"percentage":54,"score":5600},{"percentage":56,"score":5400},{"percentage":58,"score":5200},{"percentage":60,"score":5000},{"percentage":62,"score":4800},{"percentage":64,"score":4600},{"percentage":66,"score":4400},{"percentage":68,"score":4200},{"percentage":70,"score":4000},{"percentage":72,"score":3800},{"percentage":74,"score":3600},{"percentage":76,"score":3400},{"percentage":78,"score":3200},{"percentage":80,"score":3000},{"percentage":82,"score":2800},{"percentage":84,"score":2600},{"percentage":86,"score":2400},{"percentage":88,"score":2200},{"percentage":90,"score":2000},{"percentage":92,"score":1600},{"percentage":94,"score":1200},{"percentage":96,"score":800},{"percentage":98,"score":400},{"percentage":98,"score":200},{"percentage":100,"score":0}]',
//   translations:
//     '[{"original":"points_redeemed","translated":"EvolveMe task completed!"},{"original":"Not this one","translated":"Not this one"},{"original":"Brace yourself!,Share this!,Incredible!,Wow!,Unbelievable!","translated":"Brace yourself!,Share this!,Incredible!,Wow!,Unbelievable!"},{"original":"Forwarded","translated":"Forwarded"},{"original":"Next","translated":"Next"},{"original":"Facebook","translated":"Facebook"},{"original":"Twitter","translated":"Twitter"},{"original":"WhatsApp","translated":"WhatsApp"},{"original":"Copy link","translated":"Copy link"},{"original":"Play this game and become a master of disinfo!","translated":"Play this game and become a master of disinfo!"},{"original":"New technique mastered!","translated":"New technique mastered!"},{"original":"Continue","translated":"Continue"},{"original":"All techniques","translated":"All techniques"},{"original":"Well done! Your score:","translated":"Well done! Your score:"},{"original":"You won!","translated":"You won!"},{"original":"Well done! You beat your opponent by %i likes!","translated":"Well done! You beat your opponent by %i likes!"},{"original":"You lost","translated":"You lost"},{"original":"Too bad! Your opponent beat you by %i likes!","translated":"Too bad! Your opponent beat you by %i likes!"},{"original":"A tie!","translated":"A tie!"},{"original":"You and your opponent scored the same amount of likes!","translated":"You and your opponent scored the same amount of likes!"},{"original":"Top %i","translated":"Top %i"},{"original":"You did better than %i% of the people!","translated":"You did better than %i% of the people!"},{"original":"Challenge a friend","translated":"Challenge a friend"},{"original":"Play again","translated":"Play again"},{"original":"Extra content ending","translated":"Extra content ending"},{"original":"For more information about what you have learned, scroll down...","translated":"For more information about what you have learned, scroll down..."},{"original":"Share this on...","translated":"Share this on..."},{"original":"I challenge you to beat my score of %i","translated":"I challenge you to beat my score of %i"},{"original":"Likes","translated":"Followers"},{"original":"Credibility","translated":"Credibility"},{"original":"About","translated":"About"},{"original":"Share","translated":"Share"},{"original":"You have been challenged! Can you beat your opponent by scoring more than %i?","translated":"You have been challenged! Can you beat your opponent by scoring more than %i?"},{"original":"Game %i","translated":"Game %i"},{"original":"Start","translated":"Start"},{"original":"Language","translated":"Language"},{"original":"You have been challenged! Can you beat your opponent by scoring more than %i","translated":"You have been challenged! Can you beat your opponent by scoring more than %i"},{"original":"manipulate,attack,deny,ignore,conceal,obscure,destroy,lie,cheat,disrupt,twist,falsify,strike,break,exaggerate,intrigue,invent,mock,frighten,shout,whisper,provoke","translated":"manipulate,attack,deny,ignore,conceal,obscure,destroy,lie,cheat,disrupt,twist,falsify,strike,break,exaggerate,intrigue,invent,mock,frighten,shout,whisper,provoke"}]',
//   preload_images: [
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/vermommen.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/profile.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/profile.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/profile.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Trolling-1-Sociology.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-1-Biden2.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Polarization-1-Violence.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Emotion-1-Suicide.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-2-Labour2.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-5-NASA.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Conspiracy-1-Aliens.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-3-Honda.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/biden.jpeg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/nasa-840x703.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/nick.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/jane.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Ben.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/UT.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/DPNA.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/fear.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/01-this-man-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/02-gmo-meat-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/03-gmo-food-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/04-he-used-to-be-a-gmo-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/05-bad-science-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/06-back-in-my-day-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/07-science-says-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/08-relax-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/09-shoud-science-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/10-apparently-i-was-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/11-global-warming-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/12-climate-sciencists-confess-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/image-4.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/13-danger-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/15-they-test-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/polariseer.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Susan.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Joe.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Jolene.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/16-is-criminals-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/17-ill-have-you-know-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/18-so-many-criminals-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/19-broccoli-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/20-know-that-when-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/21-chasing-bad-guys-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/22-coal-fumes-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/23-huzzaah-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/24-corporations-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/25-the-government-serving-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/26-power-from-a-plant-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/27-so-happy-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/28-chemical-spill-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/29-britney-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/30-nothing-to-see-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/31-apocalypse-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/32-waste-products-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/33-corporate-profits-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/admin-ajax.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/admin-ajax.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/herna.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/admin-ajax.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/manipuleren.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/34-pyramids-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/little-pony-840x701.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/36-schools-840x612.jpg',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/bob.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/WHO.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/UN.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-jolene.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-bert.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/defend.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/fco.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-henk.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-jolene.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/twitter-bert.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/11/fco.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/trolling_badge.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/image-3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/kim.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/UT-1.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/altnws.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/doggo.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Ben-de-Rodriguez.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop2.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop2.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop1.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/photoshop3.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Rob-Otto.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/AI-SHelley.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/doggo.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/ADC.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/Glados.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Trolling-1-Sociology.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-1-Biden2.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Polarization-1-Violence.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Emotion-1-Suicide.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-2-Labour2.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-5-NASA.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Conspiracy-1-Aliens.png',
//     'https://www.getbadnews.com/wp-content/uploads/2023/09/Real-3-Honda.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/TBW.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/HTO.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/10/TCP.png',
//     'https://www.getbadnews.com/wp-content/uploads/2021/09/LFq72phE.png',
//   ],
//   languages: [
//     {
//       language: 'English',
//       abbreviation: 'en',
//       book: [
//         {
//           ID: 261,
//           post_author: '2',
//           post_date: '2021-09-24 15:36:05',
//           post_date_gmt: '2021-09-24 15:36:05',
//           post_content: '',
//           post_title: 'ENGLISH',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'english',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-09-22 12:09:19',
//           post_modified_gmt: '2023-09-22 12:09:19',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=261',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'Nederlands',
//       abbreviation: 'nl',
//       book: [
//         {
//           ID: 603,
//           post_author: '1',
//           post_date: '2022-02-02 17:47:13',
//           post_date_gmt: '2022-02-02 17:47:13',
//           post_content: '',
//           post_title: 'DUTCH',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'dutch',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-10-07 10:27:09',
//           post_modified_gmt: '2023-10-07 10:27:09',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=603',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'Deutsch',
//       abbreviation: 'de',
//       book: [
//         {
//           ID: 547,
//           post_author: '1',
//           post_date: '2022-01-31 11:05:50',
//           post_date_gmt: '2022-01-31 11:05:50',
//           post_content: '',
//           post_title: 'GERMAN',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'german',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-06-02 12:23:40',
//           post_modified_gmt: '2022-06-02 12:23:40',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=547',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: '\u010de\u0161tina',
//       abbreviation: 'cz',
//       book: [
//         {
//           ID: 657,
//           post_author: '1',
//           post_date: '2022-02-20 19:35:27',
//           post_date_gmt: '2022-02-20 19:35:27',
//           post_content: '',
//           post_title: 'CZECH',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'czech',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-06-07 11:39:03',
//           post_modified_gmt: '2022-06-07 11:39:03',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=657',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'Moldoveneasca',
//       abbreviation: 'mo',
//       book: [
//         {
//           ID: 629,
//           post_author: '1',
//           post_date: '2022-02-13 16:43:26',
//           post_date_gmt: '2022-02-13 16:43:26',
//           post_content: '',
//           post_title: 'MOLDOVAN',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'moldovan',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-10 08:42:01',
//           post_modified_gmt: '2023-05-10 08:42:01',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=629',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'bosanski',
//       abbreviation: 'bs',
//       book: [
//         {
//           ID: 698,
//           post_author: '1',
//           post_date: '2022-03-12 15:59:20',
//           post_date_gmt: '2022-03-12 15:59:20',
//           post_content: '',
//           post_title: 'BOSNIAN',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'bosnian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-06-22 10:57:29',
//           post_modified_gmt: '2022-06-22 10:57:29',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=698',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'dansk',
//       abbreviation: 'da',
//       book: [
//         {
//           ID: 894,
//           post_author: '2',
//           post_date: '2022-06-06 10:18:18',
//           post_date_gmt: '2022-06-06 10:18:18',
//           post_content: '',
//           post_title: 'DANISH',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'danish',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-07-15 11:56:42',
//           post_modified_gmt: '2022-07-15 11:56:42',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=894',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'j\u0119zyk polski',
//       abbreviation: 'pl',
//       book: [
//         {
//           ID: 697,
//           post_author: '1',
//           post_date: '2022-03-07 09:06:43',
//           post_date_gmt: '2022-03-07 09:06:43',
//           post_content: '',
//           post_title: 'POLISH',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'polish',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-09-15 14:15:37',
//           post_modified_gmt: '2022-09-15 14:15:37',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=697',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'SRPSKI',
//       abbreviation: 'sr',
//       book: [
//         {
//           ID: 729,
//           post_author: '1',
//           post_date: '2022-04-10 18:54:22',
//           post_date_gmt: '2022-04-10 18:54:22',
//           post_content: '',
//           post_title: 'SERBIAN',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'serbian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-09-28 09:39:35',
//           post_modified_gmt: '2022-09-28 09:39:35',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=729',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'norsk',
//       abbreviation: 'no',
//       book: [
//         {
//           ID: 985,
//           post_author: '2',
//           post_date: '2022-07-11 15:44:18',
//           post_date_gmt: '2022-07-11 15:44:18',
//           post_content: '',
//           post_title: 'Norwegian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'norwegian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2022-10-24 13:16:54',
//           post_modified_gmt: '2022-10-24 13:16:54',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=985',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language:
//         '\u0627\u064e\u0644\u0652\u0639\u064e\u0631\u064e\u0628\u0650\u064a\u064e\u0651\u0629\u064f',
//       abbreviation: 'ar',
//       book: [
//         {
//           ID: 954,
//           post_author: '1',
//           post_date: '2022-06-29 13:52:20',
//           post_date_gmt: '2022-06-29 13:52:20',
//           post_content: '',
//           post_title: 'Arabic',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'arabic',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-15 13:49:46',
//           post_modified_gmt: '2023-05-15 13:49:46',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=954',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: '\u0395\u03bb\u03bb\u03b7v\u03b9\u03ba\u03ac',
//       abbreviation: 'gr',
//       book: [
//         {
//           ID: 684,
//           post_author: '1',
//           post_date: '2022-02-25 20:32:16',
//           post_date_gmt: '2022-02-25 20:32:16',
//           post_content: '',
//           post_title: 'GREEK',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'greek',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-24 09:52:22',
//           post_modified_gmt: '2023-05-24 09:52:22',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=684',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'Esperanto',
//       abbreviation: 'eo',
//       book: [
//         {
//           ID: 744,
//           post_author: '1',
//           post_date: '2022-04-13 09:23:34',
//           post_date_gmt: '2022-04-13 09:23:34',
//           post_content: '',
//           post_title: 'ESPERANTO',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'esperanto',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-22 07:28:04',
//           post_modified_gmt: '2023-05-22 07:28:04',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=744',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: '\u0440\u0443\u0441\u0441\u043a\u0438\u0439',
//       abbreviation: 'ru',
//       book: [
//         {
//           ID: 805,
//           post_author: '1',
//           post_date: '2022-04-21 10:46:31',
//           post_date_gmt: '2022-04-21 10:46:31',
//           post_content: '',
//           post_title: 'Russian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'russian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-18 11:10:04',
//           post_modified_gmt: '2023-05-18 11:10:04',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=805',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'rom\u00e2ne\u0219te',
//       abbreviation: 'ro',
//       book: [
//         {
//           ID: 717,
//           post_author: '1',
//           post_date: '2022-04-09 13:25:11',
//           post_date_gmt: '2022-04-09 13:25:11',
//           post_content: '',
//           post_title: 'ROMANIAN',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'romanian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-16 08:57:18',
//           post_modified_gmt: '2023-05-16 08:57:18',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=717',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'sloven\u0161\u010dina',
//       abbreviation: 'sl',
//       book: [
//         {
//           ID: 851,
//           post_author: '1',
//           post_date: '2022-05-12 19:01:33',
//           post_date_gmt: '2022-05-12 19:01:33',
//           post_content: '',
//           post_title: 'Slovenian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'slovenian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-24 08:32:26',
//           post_modified_gmt: '2023-05-24 08:32:26',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=851',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'eesti keel',
//       abbreviation: 'est',
//       book: [
//         {
//           ID: 866,
//           post_author: '1',
//           post_date: '2022-05-19 18:57:50',
//           post_date_gmt: '2022-05-19 18:57:50',
//           post_content: '',
//           post_title: 'Estonian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'estonian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-12 08:31:25',
//           post_modified_gmt: '2023-05-12 08:31:25',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=866',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'latvie\u0161u valoda',
//       abbreviation: 'lat',
//       book: [
//         {
//           ID: 828,
//           post_author: '1',
//           post_date: '2022-04-22 17:23:01',
//           post_date_gmt: '2022-04-22 17:23:01',
//           post_content: '',
//           post_title: 'Latvian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'latvian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-16 16:15:55',
//           post_modified_gmt: '2023-05-16 16:15:55',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=828',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'lietuvi\u0173 kalba',
//       abbreviation: 'lit',
//       book: [
//         {
//           ID: 788,
//           post_author: '1',
//           post_date: '2022-04-19 18:36:56',
//           post_date_gmt: '2022-04-19 18:36:56',
//           post_content: '',
//           post_title: 'Lithuanian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'lithuanian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-16 08:09:20',
//           post_modified_gmt: '2023-05-16 08:09:20',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=788',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language:
//         '\u0443\u043a\u0440\u0430\u0457\u0301\u043d\u0441\u044c\u043a\u0430 \u043c\u043e\u0301\u0432\u0430',
//       abbreviation: 'ua',
//       book: [
//         {
//           ID: 1065,
//           post_author: '2',
//           post_date: '2023-01-03 10:34:17',
//           post_date_gmt: '2023-01-03 10:34:17',
//           post_content: '',
//           post_title: 'Ukrainian',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'ukrainian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-17 09:36:49',
//           post_modified_gmt: '2023-05-17 09:36:49',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=1065',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: 'Portugu\u00eas',
//       abbreviation: 'pt',
//       book: [
//         {
//           ID: 939,
//           post_author: '1',
//           post_date: '2022-06-28 14:42:53',
//           post_date_gmt: '2022-06-28 14:42:53',
//           post_content: '',
//           post_title: 'Portugese',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'portugese',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-06-12 07:20:56',
//           post_modified_gmt: '2023-06-12 07:20:56',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=939',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: '\u0570\u0561\u0575\u0565\u0580\u0565\u0576',
//       abbreviation: 'am',
//       book: [
//         {
//           ID: 759,
//           post_author: '1',
//           post_date: '2022-04-14 19:14:35',
//           post_date_gmt: '2022-04-14 19:14:35',
//           post_content: '',
//           post_title: 'ARMENIAN',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'armenian',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-05-19 12:05:39',
//           post_modified_gmt: '2023-05-19 12:05:39',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=759',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
//     {
//       language: '\u1017\u1019\u102c',
//       abbreviation: 'Bm',
//       book: [
//         {
//           ID: 1306,
//           post_author: '13',
//           post_date: '2023-04-26 10:38:05',
//           post_date_gmt: '2023-04-26 10:38:05',
//           post_content: '',
//           post_title: 'Burmese',
//           post_excerpt: '',
//           post_status: 'publish',
//           comment_status: 'closed',
//           ping_status: 'closed',
//           post_password: '',
//           post_name: 'burmese',
//           to_ping: '',
//           pinged: '',
//           post_modified: '2023-08-08 11:30:27',
//           post_modified_gmt: '2023-08-08 11:30:27',
//           post_content_filtered: '',
//           post_parent: 0,
//           guid: 'https://www.getbadnews.com/?post_type=books&#038;p=1306',
//           menu_order: 0,
//           post_type: 'books',
//           post_mime_type: '',
//           comment_count: '0',
//           filter: 'raw',
//         },
//       ],
//     },
  ],
  books: [],
  rtl: false,
};

export default gameDictionary;
