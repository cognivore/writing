xs = [1] + [2]
y = foldl (\_ _ -> True) False xs

main :: IO ()
main = error "irrelevant"
