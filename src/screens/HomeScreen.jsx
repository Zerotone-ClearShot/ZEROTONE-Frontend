import React, { useState, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, Alert, Animated } from "react-native";
import { Star, Home, Search, Folder, Settings, Sparkles, Flame, Clock } from "lucide-react-native";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const HomeScreen = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [flippedCardId, setFlippedCardId] = useState(null);
  const flipAnimations = useRef({});

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("권한 필요", "이미지 접근 권한이 필요합니다.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setUploadedImage(uri);
    }
  };

  const summaries = [
    {
      id: 1,
      title: "회의 요약",
      summary: "오늘 회의는 프로젝트 일정 조율과 업무 분담에 대한 내용이었습니다.",
    },
    {
      id: 2,
      title: "스터디 자료",
      summary: "리액트 훅에 대해 정리한 스크린샷입니다. 주요 내용은 useEffect와 useState 사용법.",
    },
  ];

  const flipToBack = (id) => {
    if (!flipAnimations.current[id]) flipAnimations.current[id] = new Animated.Value(0);
    Animated.timing(flipAnimations.current[id], {
      toValue: 180,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setFlippedCardId(id));
  };

  const flipToFront = (id) => {
    Animated.timing(flipAnimations.current[id], {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setFlippedCardId(null));
  };

  const getFrontStyle = (id) => ({
    transform: [
      {
        rotateY: flipAnimations.current[id]
          ? flipAnimations.current[id].interpolate({ inputRange: [0, 180], outputRange: ['0deg', '180deg'] })
          : '0deg',
      },
    ],
  });

  const getBackStyle = (id) => ({
    transform: [
      {
        rotateY: flipAnimations.current[id]
          ? flipAnimations.current[id].interpolate({ inputRange: [0, 180], outputRange: ['180deg', '360deg'] })
          : '180deg',
      },
    ],
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.greeting}>👋 안녕하세요! 오늘도 자료 정리하러 오셨군요.</Text>
        <View style={styles.badgeRow}>
          <Text style={[styles.badge, { backgroundColor: "#3B82F6" }]}>📄 오늘 요약: {summaries.length}개</Text>
          <Text style={[styles.badge, { backgroundColor: "#FACC15" }]}>📁 폴더 분류: 3종류</Text>
          <Text style={[styles.badge, { backgroundColor: "#22C55E" }]}>🕒 최근 열람: 1시간 전</Text>
        </View>

        <View style={styles.uploadBox}>
          <Text style={styles.uploadTitle}>📥 스크린샷 업로드</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <Text style={styles.uploadButtonText}>+ 새로 업로드하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tipCard}>
          <Sparkles color="#eab308" size={20} />
          <Text style={styles.tipText}>요약 카드에 메모를 남기면 나중에 찾기 쉬워요!</Text>
        </View>

        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Flame color="#EF4444" size={18} />
            <Text style={styles.sectionTitle}>🔥 인기 요약</Text>
          </View>
          <Text style={styles.sectionItem}>• 회의 요약 - 팀 업무 분배 정리</Text>
          <Text style={styles.sectionItem}>• 스터디 자료 - 리액트 핵심 요약</Text>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: "#F3F4F6" }]}>
          <View style={styles.sectionHeader}>
            <Clock color="#60A5FA" size={18} />
            <Text style={styles.sectionTitle}>🕒 최근 본 요약</Text>
          </View>
          <Text style={styles.sectionItem}>스터디 자료를 마지막으로 열람했습니다.</Text>
        </View>

        <Text style={styles.dateText}>📅 2025-03-28</Text>

        {summaries.map((item) => {
          if (!flipAnimations.current[item.id]) {
            flipAnimations.current[item.id] = new Animated.Value(0);
          }

          return (
            <View key={item.id} style={{ marginBottom: 150 }}>
              <Animated.View style={[styles.card, getFrontStyle(item.id), { zIndex: flippedCardId === item.id ? 0 : 1 }]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => flipToBack(item.id)}
                >
                  <View style={styles.cardHeader}>
                    {uploadedImage ? (
                      <Image source={{ uri: uploadedImage }} style={styles.thumbnail} />
                    ) : (
                      <View style={styles.placeholderBox} />
                    )}
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardTitle}>{item.title}</Text>
                      <Text style={styles.cardSummary}>
                        <Text style={styles.boldText}>요약: </Text>
                        {item.summary}
                      </Text>
                      <Text style={styles.viewAll}>전체보기</Text>
                    </View>
                    <Star size={16} color="#FACC15" style={styles.starIcon} />
                  </View>
                  <Text style={styles.cardHint}>카드 클릭 시 뒷면</Text>
                </TouchableOpacity>
              </Animated.View>

              <Animated.View style={[styles.card, styles.cardBack, getBackStyle(item.id), { zIndex: flippedCardId === item.id ? 1 : 0 }]}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => flipToFront(item.id)}
                >
                  <View style={styles.cardBackHeader}>
                    <Text style={styles.memoTitle}>✏️ 메모를 작성해보세요</Text>
                    <TouchableOpacity style={styles.saveButton}>
                      <Text style={styles.saveButtonText}>저장</Text>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    style={styles.memoInput}
                    placeholder="메모 입력..."
                    multiline
                  />
                  <Text style={styles.cardHint}>카드 클릭 시 앞면</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabButton}><Home size={20} color="#3B82F6" /><Text style={styles.tabText}>홈</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Search size={20} color="#6B7280" /><Text style={styles.tabText}>검색</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Folder size={20} color="#6B7280" /><Text style={styles.tabText}>폴더</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Settings size={20} color="#6B7280" /><Text style={styles.tabText}>설정</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  scrollContent: { padding: 16, paddingBottom: 100 },
  dateText: { fontSize: 13, color: "#374151", marginBottom: 6 },
  greeting: { fontSize: 14, color: "#4B5563", marginBottom: 8 },
  badgeRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 },
  badge: { paddingHorizontal: 12, paddingVertical: 6, color: "#fff", borderRadius: 16, fontSize: 12 },
  uploadBox: { backgroundColor: "#DDD6FE", borderRadius: 12, padding: 20, alignItems: "center", marginBottom: 12 },
  uploadTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  uploadButton: { backgroundColor: "#4F46E5", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 999 },
  uploadButtonText: { color: "#fff", fontSize: 14 },
  tipCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#FEF9C3", padding: 12, borderRadius: 12, gap: 8, marginBottom: 12 },
  tipText: { fontSize: 14, color: "#444" },
  sectionCard: { backgroundColor: "#fff", borderRadius: 12, padding: 16, marginBottom: 12 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 4 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", color: "#374151" },
  sectionItem: { fontSize: 12, color: "#6B7280", marginLeft: 8 },
  card: {
    backgroundColor: '#fff', backfaceVisibility: 'hidden', borderRadius: 12, padding: 14, shadowColor: '#000', shadowOpacity: 0.08, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3,
    position: 'absolute', width: '100%',
  },
  cardBack: { backgroundColor: '#EFF6FF' },
  cardHeader: { flexDirection: 'row', alignItems: 'flex-start', gap: 10 },
  thumbnail: { width: 50, height: 50, backgroundColor: '#E5E7EB', borderRadius: 8 },
  placeholderBox: { width: 50, height: 50, backgroundColor: '#E5E7EB', borderRadius: 8 },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
  cardSummary: { fontSize: 13, color: '#4B5563', flexWrap: 'wrap', },
  boldText: { fontWeight: 'bold', color: '#111827', },
  viewAll: { fontSize: 12, color: '#3B82F6', marginTop: 4 },
  cardHint: { fontSize: 10, color: '#9CA3AF', textAlign: 'right', marginTop: 6 },
  starIcon: { position: 'absolute', top: 8, right: 8 },
  cardBackHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  memoTitle: { fontSize: 13, fontWeight: 'bold', color: '#1F2937' },
  saveButton: { backgroundColor: '#3B82F6', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 6 },
  saveButtonText: { color: '#fff', fontSize: 12 },
  memoInput: { borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 8, padding: 8, fontSize: 13, backgroundColor: '#fff', textAlignVertical: 'top', minHeight: 60 },
  tabBar: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#E5E7EB" },
  tabButton: { alignItems: "center" },
  tabText: { fontSize: 11, marginTop: 2, color: "#6B7280" },
});

export default HomeScreen;
