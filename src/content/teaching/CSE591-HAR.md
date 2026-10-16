---
code: CSE 591
title: Human-aware Robotics
term: Fall 2016
meeting: CAVC 359, Tue/Thu, 9:00–10:15 AM
officeHours:
  - who: Instructor
    when: BYENG 558, Tue/Thu, 10:30–11:30AM
staff:
  - role: Instructor
    name: Dr. Yu Zhang
    office: BYENG 558
    email: yzhan442@asu.edu
prerequisites: Familiarity with basic concepts of computer science (e.g., data structure and algorithms), and probability theory. The ability to program using C++ or Python in Linux is necessary. Knowledge of AI, machine learning, and robotics is a plus.
syllabus: /teaching/CSE591-HAR/syllabus-CSE591.pdf
scheduleNote: "Subject to change. Check back frequently for updates. Last updated: Oct. 4, 2016"
projects:
  - title: "Group 1: Making PeopleBot a People’s Bot"
    description: For a robot to act naturally in a human-robot teaming scenario, it needs to actively participate in a team. To achieve this, we designed a robotic system that is competent in recognizing known human entities using their face features and voice modulations. To actively participate, the robot first needs to understand the discussion, which was achieved using Google Speech to Text conversion. This text can be send to NLP modules to understand the contextual meaning, which was beyond the scope of this project. The questions we tried to answer are, who are the members of the meeting, who is speaking in the discussion, and what is being spoken (in the terms of understanding the exact text conversion).
    youtube: a6MWWMMaD7s
  - title: "Group 2: EEG-based Attainment of Human-Robot Kumbaya"
    description: The aim of this project is to identify pathways of integrating electroencephalographic (EEG) feedback to inform the high level task planning process of a robot. The first part of the project deals with the isolation of EEG signals that may be useful in this regard, and validating their applicability to human-robot teaming scenarios. The second part of the project seeks to exploit the affective states detected in the first part to train a learning agent to produce or conform to expectations entailed by them.
    video: /teaching/CSE591-HAR/hrk.mp4
    poster: /teaching/CSE591-HAR/hrk.jpg
  - title: "Group 3: American Sign Language Detection and Recognition"
    description: Sign language is widely used in the world. It acts an important role in life of those people who are unable to speak or listen. For the disable, they are more likely in need of assistance from robot than average people. And for a robot, understanding what people try to express using sign language is the first step to help them. That is the reason why we want to build a system to capture and recognize sign language.
    youtube: 1mBzJ4uhIWQ
  - title: "Group 7: An Adaptive Game-Playing Robot"
    description: "This project describes a robotic system capable of playing the competitive board game Checkers against a human opponent. The novelty of the system lies in the manner in which it plays: unlike typical computer-based games, our system attempts to model the confidence of the human opponent based on their hand movements and facial expressions. This confidence is used to infer how skilled the opponent is at Checkers, and the robot will scale its level of play to that of the human in order to provide a satisfying experience. We evaluate the system by integrating it with a physical UR-5 robot and successfully demonstrate that it is capable of playing against a human opponent."
    award: People's Choice Demo Award
schedule:
  - date: Thu. 8/18
    topic: Course introduction.
  - date: Tue. 8/23
    topic: "Visually Interpreting Human Actions for Intelligent Agent Invited Speaker: Yezhou Yang"
  - date: Thu. 8/25
    topic: Robot Perception of Humans
    reading: "[1. ROS tutorial](http://wiki.ros.org/ROS/Tutorials) [2. Paper Assignment Doc (Perception of Humans)](https://docs.google.com/document/d/120flPiQHs86KADcs3SwlglV7wFn9R9eWFlHB7T2tnOE/edit?usp=sharing) (Due before class on 8/30) [3. Mid-term Project Assignment Doc](https://docs.google.com/document/d/1CsXqPjkv75jPOfc_AY4YcCNd-d1aGC3V3KWURFesquw/edit?usp=sharing)"
    deadline: 1. Team assignment (**Due Sep. 6, 5PM**) 2. Mid-term project proposal (**Due Sep. 16, 5PM**)
  - date: Tue. 8/30
    topic: Activity Recognition
  - date: Thu. 9/1
    topic: Human-robot Communication
  - date: Tue. 9/6
    topic: Student Presentation (Perception of Humans) (1)
    reading: "[Paper Assignment Doc (Human-robot Interface)](https://docs.google.com/document/d/1F6LZW2EzEpb8H4-Je9D45Ezb_9UQw_Cq8VD-6wdT6jc/edit?usp=sharing) (Due before class on 9/15)"
  - date: Thu. 9/8
    topic: Student Presentation (Perception of Humans) (2)
  - date: Tue. 9/13
    topic: Natural Language Processing
    reading: "[NLP overview](https://www.scm.tees.ac.uk/isg/aia/nlp/NLP-overview.pdf)"
  - date: Thu. 9/15
    topic: Gesture Recognition and Learning from Demonstration
  - date: Tue. 9/20
    topic: Human Modeling
  - date: Thu. 9/22
    topic: Goal and Plan Recognition
  - date: Tue. 9/27
    topic: Student Presentation (Human-robot Interface) (1)
  - date: Thu. 9/29
    topic: Student Presentation (Human-robot Interface) (2)
    reading: "[Fast-Forward (FF) Planner](https://fai.cs.uni-saarland.de/hoffmann/ff.html) [Java FF Planner](http://www.inf.kcl.ac.uk/staff/andrew/JavaFF/)"
    deadline: "**Reminder**: 1. Mid-term Project Demo **Due Oct. 13 (in class)** 2. Mid-term Project Presentation **Due Oct. 18/20 (in class)**"
  - date: Tue. 10/04
    topic: Goal and Plan Recognition II
  - date: Thu. 10/06
    topic: Behavior and Preference Modeling
    reading: "[Paper Assignment Doc (Human Modeling)](https://docs.google.com/document/d/1BtlxCv9iHV9OIT3GVOhQGedjyvxd25HyuzOfYvnvBMQ/edit?usp=sharing) (Due on 10/14)"
  - date: Tue. 10/11
    topic: No class. Fall Break.
  - date: Thu. 10/13
    topic: Mid-term Project Demo (check back for video links)
  - date: Tue. 10/18
    topic: Mid-term Project Presentation (1)
    deadline: Mid-term Project Report (**Due Oct. 31**)
  - date: Thu. 10/20
    topic: Mid-term Project Presentation (2)
  - date: Tue. 10/25
    topic: Student Presentation (Human Modeling) (1)
  - date: Thu. 10/27
    topic: Student Presentation (Human Modeling) (2)
  - date: Tue. 11/01
    topic: Behavior Modeling and Inverse Reinforcement Learning
  - date: Thu. 11/03
    topic: POMDP and Proactive Assistance
    reading: "[Paper Assignment Doc (Decision Making)](https://docs.google.com/document/d/1RJebhCEqcbaSwagToGdbxjJsdgXBG95y70AySlK8yy0/edit?usp=sharing) (Due on 11/08)"
  - date: Tue. 11/08
    topic: Human-aware Decision Making
  - date: Thu. 11/10
    topic: Human-aware Decision Making II
  - date: Tue. 11/15
    topic: Student Presentation (Decision Making) (1)
  - date: Thu. 11/17
    topic: Student Presentation (Decision Making) (2)
  - date: Tue. 11/22
    topic: Final Project Demo
  - date: Thu. 11/24
    topic: No class. Thanksgiving.
  - date: Tue. 11/29
    topic: Final Project Presentation (I)
  - date: Thu. 12/1
    topic: Final Project Presentation (II)
---

Despite the tremendous progress in the field of robotics made during the last decade, we are still experiencing robots’ curious ambivalence to humans. At the same time, an increasing number of applications demand that humans and robots work together. Although a few of these applications can be handled through ‘tele-operation’, technologies that act in concert with the humans in a teaming relationship with increasing levels of autonomy are desirable. For such robots to be useful, it is important for them to be human-aware and behave in a nonintrusive fashion. In this class, we will cover several broad areas in human-aware robotics and discuss the state-of-the-art approaches in each of these areas. This is a graduate level seminar course in which we will introduce the development of recent approaches in AI and Robotics and their applications to human-aware robotics.
