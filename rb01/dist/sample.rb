class Janken
  def ponFunc

    def playerFunc
      while true
        index = [
          "数字を入力してください。",
          "0: グー",
          "1: チョキ",
          "2: パー"
        ]
        index.each do |content|
          puts content
        end
        playerHand = gets.chomp
        if playerHand =~ /^[0-2]+$/
          return playerHand.to_i
        else
          puts "0〜2の数字を入力してください。"
        end
      end
    end
    p playerHand = playerFunc

    def enemyFunc
      enemyHand = rand(0..2)
      return enemyHand
    end
    p enemyHand = enemyFunc

    hands = [
      "グー",
      "チョキ",
      "パー"
    ]
    if playerHand == enemyHand
      puts "あいこです。"
      return ponFunc
    elsif (playerHand == 0 && enemyHand == 1) || (playerHand == 1 && enemyHand == 2) || (playerHand == 2 && enemyHand == 0)
      return puts "相手の手は#{hands[enemyHand]}です。あなたの勝ちです。"
    else
      return puts "相手の手は#{hands[enemyHand]}です。あなたの負けです。"
    end

  end
end
janken = Janken.new
janken.ponFunc