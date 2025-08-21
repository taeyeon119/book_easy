import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Calendar, Clock, User, Mail, Phone, MapPin, RefreshCw, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MyPage = () => {
  const user = {
    name: "김독서",
    email: "kimbook@example.com",
    phone: "010-1234-5678",
    address: "서울시 강남구 테헤란로 123",
    joinDate: "2023-03-15",
    memberType: "일반회원",
    avatar: ""
  };

  const currentRentals = [
    {
      id: 1,
      title: "모던 자바스크립트 Deep Dive",
      author: "이웅모",
      rentDate: "2024-01-10",
      dueDate: "2024-01-24",
      daysLeft: 3,
      image: "📚",
      renewable: true
    },
    {
      id: 2,
      title: "클린 코드",
      author: "로버트 C. 마틴",
      rentDate: "2024-01-08",
      dueDate: "2024-01-22",
      daysLeft: 1,
      image: "🔧",
      renewable: false
    }
  ];

  const rentalHistory = [
    {
      id: 3,
      title: "디자인 패턴",
      author: "GoF",
      rentDate: "2023-12-15",
      returnDate: "2023-12-29",
      status: "반납완료",
      rating: 5,
      image: "🎨"
    },
    {
      id: 4,
      title: "알고리즘 문제해결 전략",
      author: "구종만",
      rentDate: "2023-12-01",
      returnDate: "2023-12-14",
      status: "반납완료",
      rating: 4,
      image: "🧮"
    }
  ];

  const getDaysLeftBadge = (daysLeft: number) => {
    if (daysLeft <= 1) return <Badge variant="destructive">반납임박</Badge>;
    if (daysLeft <= 3) return <Badge variant="secondary">반납예정</Badge>;
    return <Badge variant="default">대출중</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* User Profile Header */}
        <Card className="mb-8 bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">
                  {user.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left flex-1">
                <CardTitle className="text-2xl mb-2">{user.name}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    {user.email}
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    가입일: {user.joinDate}
                  </div>
                </CardDescription>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">{user.memberType}</Badge>
                <div className="text-sm text-muted-foreground">
                  대출 중: {currentRentals.length}권
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">현재 대출</TabsTrigger>
            <TabsTrigger value="history">대출 이력</TabsTrigger>
            <TabsTrigger value="profile">개인정보</TabsTrigger>
          </TabsList>

          {/* Current Rentals */}
          <TabsContent value="current" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">현재 대출 중인 도서</h2>
              <span className="text-sm text-muted-foreground">
                총 {currentRentals.length}권
              </span>
            </div>
            
            {currentRentals.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">현재 대출 중인 도서가 없습니다</p>
                  <Link to="/books">
                    <Button>도서 둘러보기</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {currentRentals.map((book) => (
                  <Card key={book.id} className="hover:shadow-elegant transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{book.image}</div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{book.title}</h3>
                              <p className="text-muted-foreground">{book.author}</p>
                            </div>
                            {getDaysLeftBadge(book.daysLeft)}
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              대출일: {book.rentDate}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              반납일: {book.dueDate}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm">
                              반납하기
                            </Button>
                            {book.renewable && (
                              <Button variant="ghost" size="sm">
                                <RefreshCw className="h-4 w-4 mr-2" />
                                연장하기
                              </Button>
                            )}
                            <Link to={`/book/${book.id}`}>
                              <Button variant="ghost" size="sm">
                                상세보기
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Rental History */}
          <TabsContent value="history" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">대출 이력</h2>
              <span className="text-sm text-muted-foreground">
                총 {rentalHistory.length}권
              </span>
            </div>
            
            <div className="space-y-4">
              {rentalHistory.map((book) => (
                <Card key={book.id} className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{book.image}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{book.title}</h3>
                            <p className="text-muted-foreground">{book.author}</p>
                          </div>
                          <Badge variant="outline">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {book.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            대출: {book.rentDate}
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            반납: {book.returnDate}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-sm text-muted-foreground mr-2">평점:</span>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span 
                                  key={i} 
                                  className={i < book.rating ? 'text-secondary' : 'text-muted-foreground'}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <Link to={`/book/${book.id}`}>
                            <Button variant="ghost" size="sm">
                              다시 대출
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Settings */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>개인정보</CardTitle>
                <CardDescription>
                  회원정보를 확인하고 수정할 수 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">이름</label>
                    <p className="text-foreground">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">회원구분</label>
                    <p className="text-foreground">{user.memberType}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">이메일</label>
                    <p className="text-foreground">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">전화번호</label>
                    <p className="text-foreground">{user.phone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground">주소</label>
                    <p className="text-foreground">{user.address}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline">정보 수정</Button>
                  <Button variant="outline">비밀번호 변경</Button>
                  <Button variant="ghost" className="text-destructive">
                    회원 탈퇴
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyPage;