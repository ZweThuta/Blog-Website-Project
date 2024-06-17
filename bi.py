dataset = []
#Visualization using  seaborn
#vertical bar chart
import seaborn as sns
import matplotlib.pyplot as plt
sns.barplot(x='Item Type',y='Total Profit', data = dataset, ci=None )
plt.title('Total Profit by Item Type', size=26)
plt.show()

#horizontal bar chart
import seaborn as sns
import matplotlib.pyplot as plt
sns.barplot(x='Total Profit',y='Item Type', data = dataset, ci=None )
plt.title('Total Profit by Item Type', size=26)
plt.show()

#cluster bar chart
import seaborn as sns
import matplotlib.pyplot as plt
sns.barplot(x='Region',y='Total Profit', data = dataset, ci=None, hue='Item Type')
plt.title('Total Profit by Region', size=26)
plt.show()

#line chart
import seaborn as sns
import matplotlib.pyplot as plt
sns.lineplot(x='Country',y='Total Profit', data = dataset, ci=None, hue='Sales Channel', marker='*', markersize=15,dashes=True)
plt.title('Total Profit by Country', size=26)
plt.show()

import seaborn as sns
import matplotlib.pyplot as plt
sns.barplot(x='Month',y='Total Profit', data = dataset, ci=None )
plt.title('Total Profit by Month', size=26)
plt.show()